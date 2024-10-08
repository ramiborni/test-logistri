<template>
  <span>
    <div class="v-container flex flex-col gap-11 bg-white pt-6 md:flex-row">
      <div class="bg-white md:w-[21%]">
        <div
          class="sticky top-32 min-w-44 border-l-[1px] border-r-[1px] border-gray-200 md:mb-6"
        >
          <BaseInvestrareAccordion
            v-for="(link, index) in investrareAccordions"
            :key="index"
            :link="link"
            :index="index"
          />
        </div>
      </div>
      <div class="bg-white md:w-[79%]">
        <slot />
      </div>
    </div>
  </span>
</template>

<script setup lang="ts">
import { investrareAccordions } from '@/links'
</script>
