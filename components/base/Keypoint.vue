<template>
  <div v-if="props.item" class="flex items-start gap-x-5">
    <NuxtImg
      :src="`/icons/${props.dark ? 'keypoint-dark' : 'keypoint'}.svg`"
      class="min-w-[50px]"
      quality="10"
      loading="lazy"
    />

    <div>
      <div class="flex flex-col gap-y-2">
        <p class="text-xl font-light leading-6 tracking-wide">
          {{ props.item.title }}
        </p>

        <p class="mt-1 text-3xl">
          {{ props.item.description }}
        </p>
      </div>
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
  item: { title: string; description: string }
  plain?: boolean
  dark?: boolean
}

const props = defineProps<Props>()
</script>
