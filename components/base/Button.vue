<template>
  <button
    class="flex items-center gap-2 rounded-full px-4 py-[7px] text-[13px] font-light leading-[13px] transition-all duration-300"
    :class="buttonVariant[props.variant]"
  >
    <NuxtImg :src="`/icons/${currentIcon}.svg`" class="min-w-3 pt-[1px]" />
    <span>{{ props.title }}</span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  title: string
  variant: 'black' | 'white' | 'transparent'
}

const buttonVariant = ref({
  black: 'bg-black text-white',
  white: 'bg-white text-black',
  transparent: 'bg-transparent text-black border-[1px] border-black',
})

const currentIcon = computed(() =>
  props.variant === 'black' ? 'arrow-white' : 'arrow',
)

const props = defineProps<Props>()
</script>
