<template>
  <div class="v-container bg-white pb-[60px]">
    <div class="flex items-center justify-center lg:justify-between">
      <h4 class="text-2xl tracking-wide lg:text-3xl">
        {{ props.external ? 'Etableringsmöjligheter' : 'Pressmeddelanden' }}
      </h4>

      <a
        v-show="!props.external"
        href="/"
        class="hidden text-[15px] underline lg:block"
      >
        Visa alla
      </a>
    </div>

    <div
      class="mt-8 grid grid-cols-1 grid-rows-5 gap-y-3 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-6"
    >
      <ClientOnly>
        <div
          v-for="(item, index) in links"
          :key="index"
          class="flex h-auto flex-col items-start justify-between gap-x-10 lg:flex-row"
        >
          <div class="min-w-max text-[10px] leading-6 text-[#717171]">
            {{ item.date }}
          </div>

          <div class="flex-1 text-sm">{{ item.title }}</div>

          <a
            :href="item.url"
            class="min-w-max text-xs leading-6 text-[#717171] underline"
          >
            Läs mer
          </a>
        </div>
      </ClientOnly>

      <BaseButton
        title="Visa mer"
        variant="transparent"
        class="mx-auto mt-2 w-max lg:hidden"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { pressLinks } from '@/links'

interface Props {
  external?: boolean
}

const props = defineProps<Props>()

const { smaller } = useBreakpoints(breakpointsTailwind)

const links = computed(() =>
  smaller('lg').value ? pressLinks.slice(0, 5) : pressLinks,
)
</script>
