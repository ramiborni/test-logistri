<template>
  <div
    class="fixed top-0 z-50 w-full bg-[#1a2e1a] p-2 text-sm text-white shadow-md transition-colors duration-500"
  >
    <div
      class="mx-auto flex max-w-screen-xxl flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0"
    >
      <div class="flex items-center space-x-2">
        <span class="font-semibold"
          >Aktiekurs: {{ stockPrice.toFixed(2) }} SEK</span
        >
        <span :class="changeClass"
          >{{ changeDirection }} {{ changePercentage.toFixed(2) }}%</span
        >
        <span :class="changeAmountClass"
          >{{ changeAmount.toFixed(2) }} SEK</span
        >
      </div>
      <div class="flex items-center space-x-2">
        <span>Högst i år: {{ yearHigh.toFixed(2) }} SEK</span>
        <span class="text-gray-400">•</span>
        <span>Lägst i år: {{ yearLow.toFixed(2) }} SEK</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: stockData } = await useFetch('/api/stock-data', {
  server: true,
})

const stockPrice = computed(() => stockData.value?.stockPrice || 0)
const changePercentage = computed(() => stockData.value?.changePercentage || 0)
const changeAmount = computed(() => stockData.value?.changeAmount || 0)
const yearHigh = computed(() => stockData.value?.yearHigh || 0)
const yearLow = computed(() => stockData.value?.yearLow || 0)

const changeDirection = computed(() =>
  changePercentage.value >= 0 ? '▲' : '▼',
)
const changeClass = computed(() =>
  changePercentage.value >= 0 ? 'text-green-500' : 'text-red-500',
)
const changeAmountClass = computed(
  () =>
    `${changeAmount.value >= 0 ? 'bg-green-500' : 'bg-red-500'} text-white px-1 rounded`,
)
</script>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
}
</style>
