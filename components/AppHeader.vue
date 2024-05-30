<template>
  <div
    class="v-container flex w-full items-center justify-between py-5 transition-colors duration-500 2xl:max-w-screen-2xl"
    :class="headerClass"
  >
    <div class="flex items-center gap-7 xl:gap-14">
      <NuxtImg
        class="h-9 w-36 lg:h-11 lg:w-44"
        :src="`/${logo}.png`"
        quality="10"
      />

      <div class="hidden gap-5 lg:flex xl:gap-10">
        <NuxtLink v-for="link in links" :key="link.title" :to="link.url">
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
</template>

<script lang="ts" setup>
const links = ref([
  { title: 'Om Logistri', url: '/' },
  { title: 'Vårt Erbjudande', url: '/' },
  { title: 'Fastighetsportfölj', url: '/' },
  { title: 'Investerare', url: '/' },
])

const { y } = useWindowScroll()

const scrolled = computed(() => y.value >= 1)
const logo = computed(() => (scrolled.value ? 'logo' : 'logo-white'))
const burger = computed(() => (scrolled.value ? 'burger' : 'burger-white'))
const headerClass = computed(() =>
  scrolled.value
    ? 'bg-white text-black fixed top-0 border-b-[1px] border-gray-200'
    : 'bg-transparent text-white absolute top-0',
)
</script>
