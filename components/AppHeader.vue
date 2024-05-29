<template>
  <div
    class="v-container fixed top-0 flex w-full items-center justify-between bg-transparent py-5 text-white 2xl:w-[1600px]"
  >
    <div class="flex items-center gap-7 xl:gap-14">
      <NuxtImg class="!w-44" src="/logo-white.png" />

      <div class="hidden gap-5 lg:flex xl:gap-10">
        <NuxtLink v-for="link in links" :key="link.title" :to="link.url">
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <BaseButton title="Kontakta oss" variant="white" class="hidden md:flex" />
      <NuxtImg src="/icons/burger.svg" class="w-6 lg:hidden" />
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
</script>
