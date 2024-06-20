<template>
  <ClientOnly>
    <div
      class="v-container z-20 flex w-full max-w-screen-xxl items-center justify-between py-5 transition-colors duration-500"
      :class="[headerClass]"
    >
      <div class="flex items-center gap-7 xl:gap-14">
        <NuxtLink to="/">
          <NuxtImg
            class="h-9 w-36 lg:h-11 lg:w-44"
            :src="`/${logo}.png`"
            quality="10"
          />
        </NuxtLink>

        <div class="hidden gap-5 lg:flex xl:gap-10">
          <NuxtLink
            v-for="link in headerLinks"
            :key="link.title"
            :to="link.url"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <BaseButton
          title="Kontakta oss"
          :variant="buttonVariant"
          class="hidden md:flex"
        />
        <NuxtImg
          :src="`/icons/${burger}.svg`"
          class="w-6 lg:hidden"
          quality="10"
          @click="$emit('openMenu')"
        />
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { headerLinks } from '@/links'

defineEmits(['openMenu'])

const { y } = useWindowScroll()
const route = useRoute()

const isHomepage = computed(() => route.name === 'homepage')
const isScrolled = computed(() => y.value >= 1)

const logo = computed(() =>
  isHomepage.value && !isScrolled.value ? 'logo-white' : 'logo',
)
const buttonVariant = computed(() =>
  isHomepage.value && !isScrolled.value ? 'white' : 'black',
)
const burger = computed(() =>
  isHomepage.value && !isScrolled.value ? 'burger-white' : 'burger',
)
const headerClass = computed(() =>
  isHomepage.value && !isScrolled.value
    ? 'bg-transparent text-white fixed top-0'
    : 'bg-white text-black fixed top-0 border-b-[1px] border-gray-200',
)
</script>
