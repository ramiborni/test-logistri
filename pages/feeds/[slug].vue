<template>
  <div class="v-container bg-white py-36">
    <!-- Wait for data to load -->
    <div v-if="pending" class="flex items-center justify-center">
      Loading...
    </div>

    <!-- Display news content when data is fetched -->
    <div v-else>
      <!-- Check if newsItem is defined -->
      <template v-if="newsItem">
        <h1 class="text-2xl font-bold lg:text-3xl">
          {{ newsItem.content.title }}
        </h1>
        <p class="text-sm text-[#717171]">
          {{ formatDate(newsItem.content.publish_date) }}
        </p>

        <div class="mt-4 flex flex-col gap-y-2">
          <!-- Render HTML content with fallback -->
          <div
            v-if="newsItem.content.html"
            class="mt-6 flex flex-col gap-y-8"
            v-html="newsItem.content.html"
          ></div>
          <p v-else>No content available.</p>
        </div>

        <a href="/feeds" class="mt-8 inline-block underline">Back to News</a>
      </template>

      <!-- Handle case where newsItem is not found -->
      <template v-else>
        <p class="text-red-500">News item not found.</p>
        <a href="/feeds" class="mt-8 inline-block underline">Back to News</a>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

// Access the slug from the dynamic route
const route = useRoute()
const slug = route.params.slug

// Fetch data from the API using the slug
const { data: apiData, pending } = await useFetch(
  'https://feed.mfn.se/v1/feed/74dc4741-3d06-41bc-96b3-ac7f1353eccc.json',
  { server: true }, // Fetch on the server
)

// Find the specific news item by slug
const newsItem = computed(() => {
  const item = apiData.value?.items?.find(
    (item: any) => item.content.slug === slug,
  )
  // Debugging
  console.log('Found News Item:', item)
  return item || null // Ensure it returns null if not found
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
