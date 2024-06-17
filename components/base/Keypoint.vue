<template>
  <div class="flex items-start gap-x-5">
    <NuxtImg
      src="/icons/keypoint.svg"
      class="min-w-[50px]"
      quality="10"
      loading="lazy"
    />

    <div>
      <p class="text-xl font-light leading-6 tracking-wide">
        Keypoint {{ props.index }}
      </p>

      <p class="mt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <BaseButton
        v-if="!plain"
        title="Utforska mer"
        variant="transparent"
        class="mt-6 w-max"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  index: number
  plain?: boolean
}

const props = defineProps<Props>()
</script>
