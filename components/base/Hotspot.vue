<template>
  <NuxtLink
    :to="props.item.url"
    class="relative overflow-hidden"
    :class="[props.dense ? 'aspect-[4/2.57]' : 'aspect-[4/2.9]']"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div
      v-if="project"
      class="absolute left-7 top-4 z-10 text-sm font-thin tracking-wider text-white"
    >
      TIDIGARE PROJEKT
    </div>

    <NuxtImg
      :src="`/images/${props.item.image}.png`"
      class="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110"
      format="webp"
      :quality="props.dense ? 10 : 30"
      loading="lazy"
    />

    <BaseOverlay />

    <div
      class="pointer-events-none absolute bottom-0 left-0 z-10 w-full p-7 text-white"
      :class="[project && 'bg-black']"
    >
      <h3 class="text-xl lg:text-3xl" :class="[project && 'text-mint']">
        {{ props.item.title }}
      </h3>

      <p class="mt-3 max-w-[410px] text-sm font-light lg:text-base">
        {{ props.item.text }}
      </p>

      <BaseButton
        v-if="!project"
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
  project?: boolean
}

const props = defineProps<Props>()

const isHovered = ref(false)
</script>
