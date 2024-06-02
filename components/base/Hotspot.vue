<template>
  <NuxtLink
    :to="props.item.url"
    class="relative overflow-hidden"
    :class="[props.dense ? 'aspect-[4/2.57]' : 'aspect-[4/2.9]']"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <NuxtImg
      :src="`/images/${props.item.image}.png`"
      class="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110"
      format="webp"
      :quality="props.dense ? 10 : 30"
    />

    <BaseOverlay />

    <div class="pointer-events-none absolute bottom-7 left-7 z-10 text-white">
      <h3 class="text-xl lg:text-3xl">{{ props.item.title }}</h3>

      <p class="mt-3 max-w-[429px] text-sm font-light lg:text-base">
        {{ props.item.text }}
      </p>

      <BaseButton
        title="Läs mer"
        :variant="isHovered ? 'black' : 'white'"
        class="mt-5"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Link } from '@/links'

interface Props {
  item: Link
  dense?: boolean
}

const props = defineProps<Props>()

const isHovered = ref(false)
</script>
