<template>
  <ClientOnly>
    <div
      class="v-container z-20 flex w-full max-w-screen-xxl items-center justify-between py-5 transition-colors duration-500"
      :class="[headerClass]"
    >
      <div class="flex items-center gap-7 xl:gap-14">
        <NuxtImg
          class="h-9 w-36 lg:h-11 lg:w-44"
          :src="`/${logo}.png`"
          quality="10"
        />

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
          :variant="scrolled ? 'black' : 'white'"
          class="hidden md:flex"
        />
        <NuxtImg :src="`/icons/${burger}.svg`" class="w-6 lg:hidden" />
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { headerLinks } from '@/links'

const { y } = useWindowScroll()

const scrolled = computed(() => y.value >= 1)
const logo = computed(() => (scrolled.value ? 'logo' : 'logo-white'))
const burger = computed(() => (scrolled.value ? 'burger' : 'burger-white'))
const headerClass = computed(() =>
  scrolled.value
    ? 'bg-white text-black fixed top-0 border-b-[1px] border-gray-200'
    : 'bg-transparent text-white fixed top-0',
)
</script>
