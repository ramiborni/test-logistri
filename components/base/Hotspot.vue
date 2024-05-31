<template>
  <NuxtLink :to="props.url" class="relative aspect-[4/2.9] overflow-hidden">
    <NuxtImg
      :src="props.imageSrc"
      class="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110"
      format="webp"
      quality="40"
    />

    <BaseOverlay />

    <div class="pointer-events-none absolute bottom-7 left-7 z-10 text-white">
      <h3 class="text-xl lg:text-3xl">{{ props.title }}</h3>

      <p class="mt-3 max-w-[429px] text-sm font-light lg:text-base">
        {{ props.text }}
      </p>

      <BaseButton title="Läs mer" variant="white" class="mt-5" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  imageSrc: string
  title: string
  text: string
  url: string
}

const props = defineProps<Props>()
</script>
