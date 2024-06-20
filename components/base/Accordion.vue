<template>
  <div
    class="border-b-[1px] border-gray-200 py-4"
    :class="[!index && 'border-t-[1px]']"
  >
    <div class="flex justify-between" @click="opened = !opened">
      <span>{{ props.link.title }}</span>
      <span class="text-lg">{{ opened ? '-' : '+' }}</span>
    </div>

    <div v-if="opened" class="text-xs font-light">
      <NuxtLink
        v-for="sublink in props.link.sublinks"
        :key="sublink.title"
        :to="{ name: sublink.url }"
        class="mt-4 block"
      >
        {{ sublink.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FooterLink } from '@/links'

interface Props {
  link: FooterLink
  index: number
}

const props = defineProps<Props>()

const opened = ref(false)
</script>
