<template>
  <div>
    <HomeHero />
    <BaseQuote />
    <HomeKeypoints :data="keypointsData" />
    <HomeHotspots />
    <HomePressfeed />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'homepage',
})
const keypointsData = ref([
  { title: 'FASTIGHETER', description: '21st' },
  { title: 'UTHYRBAR AREA', description: '186 479 m²' },
  { title: 'Antal ', description: 'hyresgäste' },
  { title: 'WAULT', description: '6,9 år' },
])
</script>
