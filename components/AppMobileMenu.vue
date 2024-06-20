<template>
  <Transition name="fade">
    <div
      v-if="props.opened"
      class="fixed left-0 top-0 z-40 h-svh w-full bg-white lg:hidden"
    >
      <NuxtImg
        src="/icons/close.svg"
        class="absolute right-5 top-5 w-4"
        @click="$emit('closeMenu')"
      />

      <div class="mt-3 flex justify-center">
        <NuxtImg src="/logo.png" class="w-32" />
      </div>

      <div class="mt-20 flex flex-col items-center gap-10 text-2xl">
        <NuxtLink
          v-for="link in headerLinks"
          :key="link.url"
          :to="link.url"
          class="text-2xl"
          @click="$emit('closeMenu')"
          >{{ link.title }}
        </NuxtLink>

        <NuxtLink>Kontakta oss</NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useScrollLock } from '@vueuse/core'
import { headerLinks } from '@/links'

interface Props {
  opened: boolean
}

const props = defineProps<Props>()
defineEmits(['closeMenu'])

const isLocked = useScrollLock(document?.body)

watch(
  () => props.opened,
  (newValue) => {
    isLocked.value = !!newValue
  },
)
</script>

<style>
@import '@/assets/css/transitions.css';
</style>
