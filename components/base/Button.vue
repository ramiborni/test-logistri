<template>
  <button
    class="flex items-center gap-2 rounded-full px-4 py-[7px] text-[13px] font-light leading-[13px] transition-all duration-300"
    :class="buttonVariant[props.variant]"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <NuxtImg
      :src="`/icons/${currentIcon}.svg`"
      class="min-w-3 pt-[1px]"
      loading="lazy"
    />
    <span>{{ props.title }}</span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  title: string
  variant: 'black' | 'white' | 'transparent'
}
const props = defineProps<Props>()

const isHovered = ref(false)

const buttonVariant = ref({
  black:
    'bg-black text-white border-[1px] border-black hover:bg-transparent hover:text-black',
  white:
    'bg-white text-black border-[1px] border-white hover:bg-black hover:text-white hover:border-black',
  transparent:
    'bg-transparent text-black border-[1px] border-black hover:bg-black hover:text-white',
})

const currentIcon = computed(() => {
  if (props.variant === 'black') {
    return isHovered.value ? 'arrow' : 'arrow-white'
  }

  return isHovered.value ? 'arrow-white' : 'arrow'
})
</script>
