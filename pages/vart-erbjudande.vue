<template>
  <div class="grid grid-cols-1 bg-white lg:grid-cols-2">
    <BaseHotspot
      v-for="item in hotspotsLinks"
      :key="item.image"
      :item="item"
      dense
    />
  </div>
</template>

<script setup lang="ts">
import { hotspotsLinks } from '@/links'
</script>
