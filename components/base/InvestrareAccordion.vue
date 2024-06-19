<template>
  <div class="text-sm font-light">
    <div
      class="border-b-[1px] border-gray-200 p-4"
      :class="[!index && 'border-t-[1px]']"
    >
      <div class="flex cursor-pointer justify-between" @click="handleClick">
        <span>{{ props.link.title }}</span>
        <NuxtImg
          v-if="hasSublinks"
          src="/icons/chevron-down.svg"
          width="20"
          :class="[!opened && '-rotate-90']"
        />
      </div>
    </div>
    <div v-if="opened">
      <NuxtLink
        v-for="sublink in props.link.sublinks"
        :key="sublink.title"
        :to="sublink.url"
        class="block border-b-[1px] border-gray-200 p-4"
      >
        - {{ sublink.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { FooterLink } from '@/links'

interface Props {
  link: FooterLink
  index: number
}

const props = defineProps<Props>()

const opened = ref()

const router = useRouter()
const { greater } = useBreakpoints(breakpointsTailwind)

const hasSublinks = computed(() => props.link.sublinks.length)

watch(
  () => greater('md').value,
  (newValue) => (opened.value = newValue),
)

function handleClick() {
  if (!hasSublinks.value) router.push({ name: 'investera-i-logistri' })

  opened.value = !opened.value
}
</script>
