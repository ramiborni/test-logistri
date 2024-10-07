<template>
  <div class="v-container w-full bg-white py-11 lg:py-[88px]">
    <p
      class="mx-auto max-w-screen-md text-center text-sm font-light italic leading-6 tracking-wide lg:text-xl"
    >
      <!-- Display the custom quote if passed, otherwise show the default one -->
      {{ quote || defaultQuote }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Define a prop to accept a quote
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  quote?: string // Optional prop
}>()

// Define the default quote as a constant
const defaultQuote =
  '"Logistris förvaltning ska kännetecknas av långsiktighet, kunskap och tillämpat sunt förnuft"'
</script>
