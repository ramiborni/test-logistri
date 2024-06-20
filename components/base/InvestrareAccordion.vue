<template>
  <div class="text-sm font-light">
    <div
      class="border-b-[1px] border-gray-200 p-4"
      :class="[!index && 'border-t-[1px]']"
    >
      <NuxtLink
        :to="{ name: props.link.url }"
        class="flex justify-between"
        :class="[exactLink && 'font-medium']"
        @click="handleClick"
      >
        <span>{{ props.link.title }}</span>
        <NuxtImg
          v-if="props.link.sublinks.length"
          src="/icons/chevron-down.svg"
          width="20"
          :class="[!opened && '-rotate-90']"
        />
      </NuxtLink>
    </div>
    <div v-if="opened">
      <NuxtLink
        v-for="sublink in props.link.sublinks"
        :key="sublink.title"
        :to="{ name: sublink.url }"
        :class="[$route.name === sublink.url && 'font-medium']"
        class="block border-b-[1px] border-gray-200 p-4"
      >
        - {{ sublink.title }}
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

const route = useRoute()

const exactLink = computed(() => route.path.includes(props.link.url))

onMounted(() => {
  opened.value = exactLink.value
})

function handleClick() {
  if (route.name === props.link.url) {
    opened.value = !opened.value
  }
}
</script>
