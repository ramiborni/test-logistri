<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <BaseQuote />

    <div class="v-container bg-smoke py-16 lg:py-32">
      <h2 class="text-3xl tracking-wide lg:text-4xl">
        Logistri är ett växande fastighetsbolag.
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-x-24 gap-y-10 lg:grid-cols-2">
        <ClientOnly>
          <p v-for="(text, index) in texts" :key="index">{{ text }}</p>
        </ClientOnly>
      </div>
    </div>

    <div class="v-container bg-white py-16 lg:py-24">
      <h2 class="text-center text-3xl lg:text-4xl">
        Logistri är ett växande fastighetsbolag.
      </h2>

      <div
        class="mt-20 grid grid-cols-1 justify-items-center gap-y-16 lg:grid-cols-3 lg:gap-x-24"
      >
        <div v-for="item in 3" :key="item">
          <div class="flex w-full justify-center">
            <BaseMarker icon-src="/icons/contract.svg" />
          </div>

          <div class="mt-2 text-center text-xl lg:mt-6">
            Lorem <br />
            Principöverenskommelse
          </div>
        </div>
      </div>
    </div>
    <div class="v-container h-96 bg-red-500 px-0 lg:h-[540px]">
      <NuxtImg
        src="/images/drone-capture.png"
        loading="lazy"
        format="webp"
        quality="30"
        class="h-full w-full object-cover object-center"
      />
    </div>

    <div class="v-container bg-white py-16 lg:py-24 xxl:px-0">
      <h2 class="text-3xl tracking-wide lg:text-4xl">
        Medarbetare och kontaktuppgifter
      </h2>

      <div
        class="mt-10 grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7"
      >
        <div v-for="item in 4" :key="item" class="relative">
          <NuxtImg
            src="/images/guy.png"
            loading="lazy"
            format="webp"
            quality="50"
            class="aspect-[1/1.2] h-full w-full object-cover object-center md:aspect-[1/1.4]"
          />

          <div class="absolute bottom-0 left-0 z-10 w-full bg-black p-4">
            <h4 class="text-mint text-[18px]">Projekt Micromatic</h4>

            <p class="mt-2 text-[9px] font-light text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              nulla dui. Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { aboutUsTexts } from '@/links'

const { smaller } = useBreakpoints(breakpointsTailwind)

const heroData = {
  title: 'Ett långsiktigt partnerskap',
  text: 'Logistri är ett växande fastighetsbolag som äger och förvaltar fastigheter som är operationellt kritiska för våra hyresgästers verksamheter',
  imageSrc: '/image.png',
}

const texts = computed(() =>
  smaller('lg').value
    ? aboutUsTexts.filter((_, index) => index !== 2)
    : aboutUsTexts,
)
</script>
