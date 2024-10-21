<template>
  <div class="fixed left-0 right-0 top-0 z-50">
    <StockTicker v-if="showStockTicker" />
    <ClientOnly>
      <div
        class="v-container max-w-screen z-40 flex w-full items-center justify-between py-5 transition-all duration-500"
        :class="[headerClass, { 'mt-8': showStockTicker }]"
      >
        <div class="flex items-center gap-7 xl:gap-14">
          <NuxtLink to="/">
            <NuxtImg
              class="h-9 w-36 lg:h-11 lg:w-44"
              :src="`/${logo}.png`"
              quality="10"
            />
          </NuxtLink>

          <div class="hidden gap-5 lg:flex xl:gap-10">
            <NuxtLink
              v-for="link in headerLinks"
              :key="link.title"
              :to="link.url"
            >
              {{ link.title }}
            </NuxtLink>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <BaseButton
            title="Kontakta oss"
            :variant="buttonVariant"
            class="hidden md:flex"
          />
          <NuxtImg
            :src="`/icons/${burger}.svg`"
            class="w-6 lg:hidden"
            quality="10"
            @click="$emit('openMenu')"
          />
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'
import StockTicker from './base/StockTicker.vue'
import { headerLinks } from '@/links'

defineEmits(['openMenu'])

const route = useRoute()
const { y } = useWindowScroll()

const isHomepage = computed(() => route.name === 'homepage')
const isScrolled = computed(() => y.value >= 1)

const showStockTicker = computed(() => {
  return route.path === '/investerare' || route.path.startsWith('/investerare/')
})

const logo = computed(() =>
  isHomepage.value && !isScrolled.value ? 'logo-white' : 'logo',
)
const buttonVariant = computed(() =>
  isHomepage.value && !isScrolled.value ? 'white' : 'black',
)
const burger = computed(() =>
  isHomepage.value && !isScrolled.value ? 'burger-white' : 'burger',
)
const headerClass = computed(() => {
  if (isHomepage.value && !isScrolled.value) {
    return 'bg-transparent text-white'
  } else {
    return 'bg-white text-black border-b-[1px] border-gray-200'
  }
})
</script>

<style scoped>
.v-container {
  transition: all 0.3s ease;
}
</style>
