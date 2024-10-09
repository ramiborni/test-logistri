<template>
  <div class="v-container bg-white pb-[60px]">
    <!-- Wait for data to load -->
    <div v-if="pending" class="flex items-center justify-center">
      Loading...
    </div>

    <!-- Render the content only after data is fetched -->
    <div v-else>
      <div class="flex items-center justify-center lg:justify-between">
        <h4 class="text-2xl tracking-wide lg:text-3xl">
          {{ props.external ? 'Etableringsmöjligheter' : 'Pressmeddelanden' }}
        </h4>

        <a
          v-show="!props.external && !viewAll"
          href="/feeds"
          class="hidden text-[15px] underline lg:block"
        >
          Visa alla
        </a>
      </div>

      <!-- Grid for press releases -->
      <div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <div
          v-for="(item, index) in limitedLinks"
          :key="index"
          class="col-span-1 flex flex-col gap-y-2"
        >
          <!-- Date Column -->
          <div class="text-[10px] text-[#717171] lg:text-left">
            {{ formatDate(item.content.publish_date) }}
          </div>

          <!-- Title Column -->
          <div class="text-left text-sm">
            {{ item.content.title }}
          </div>

          <!-- Read more Column -->
          <div class="text-xs text-[#717171] underline">
            <a :href="`/feeds/${item.content.slug}`">Read more</a>
          </div>
        </div>
      </div>

      <!-- Show more button for mobile, hidden if viewAll is true -->
      <BaseButton
        v-if="!viewAll"
        title="Visa mer"
        variant="transparent"
        class="mx-auto mt-2 w-max lg:hidden"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

// Define the Props interface to include 'external' and 'viewAll'
interface Props {
  external?: boolean
  viewAll?: boolean
}

// Define the props with the new 'viewAll' parameter
const props = defineProps<Props>()

// Use breakpoints to determine layout behavior
const { smaller } = useBreakpoints(breakpointsTailwind)

// Fetch data from the API using Nuxt's useFetch and ensure server-side fetching
const { data: apiData, pending } = await useFetch(
  'https://feed.mfn.se/v1/feed/74dc4741-3d06-41bc-96b3-ac7f1353eccc.json',
  { server: true }, // Force server-side fetch
)

// Computed property to get the links, adjust based on 'viewAll' prop
const limitedLinks = computed(() => {
  if (props.viewAll) {
    // If 'viewAll' is true, show all items
    return (apiData as any).value.items
  } else {
    // Limit the number of items for smaller screens and large screens if 'viewAll' is false
    return smaller('lg').value
      ? (apiData.value as any).items.slice(0, 5)
      : (apiData.value as any).items.slice(0, 9)
  }
})

// Helper function to format dates
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(dateString).toLocaleDateString('sv-SE', options)
}
</script>
