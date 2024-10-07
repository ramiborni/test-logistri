<template>
  <div
    class="v-container flex w-full flex-col items-center gap-10 bg-smoke py-10 lg:flex-row lg:items-start lg:py-20"
  >
    <p class="text-2xl tracking-wider lg:w-[47%] lg:text-4xl lg:leading-[58px]">
      Logistri är ett växande fastighetsbolag.
    </p>

    <div class="grid w-10/12 grid-cols-1 gap-16 lg:w-[53%] lg:grid-cols-2">
      <BaseKeypoint v-for="item in data" :key="item" :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  data: Array<any> // Define the type of data you expect
}>()
</script>
