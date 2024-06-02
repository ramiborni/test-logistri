<template>
  <div
    class="v-container grid grid-cols-1 gap-7 bg-white py-10 lg:grid-cols-2 lg:py-20"
  >
    <BaseHotspot v-for="item in hotspotsLinks" :key="item.image" :item="item" />
  </div>
</template>

<script setup lang="ts">
import { hotspotsLinks } from '@/links'
</script>
