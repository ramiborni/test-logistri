<template>
  <input
    type="text"
    :placeholder="props.placeholder"
    class="w-full rounded-full border-[1px] border-black px-2.5 py-[7px] outline-none placeholder:text-[13px] placeholder:font-light placeholder:text-black"
    @input="
      emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<script setup lang="ts">
interface Props {
  placeholder: string
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>
