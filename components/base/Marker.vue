<template>
  <div class="relative h-[76px] w-[76px] lg:h-[100px] lg:w-[100px]">
    <div
      class="absolute left-0 top-0 h-10 w-10 rounded-full bg-[#B7DDE0] lg:h-14 lg:w-14"
    ></div>

    <NuxtImg
      :src="props.iconSrc"
      class="absolute left-[20%] top-[10%] w-[52px] lg:w-16"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  iconSrc: string | undefined
}

const props = defineProps<Props>()
</script>
