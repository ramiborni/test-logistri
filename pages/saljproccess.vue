<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <div
      class="v-container flex w-full flex-wrap justify-between bg-white py-10 lg:py-20"
    >
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="w-full lg:w-[38%]"
        :style="{ marginTop: spacings[index] }"
      >
        <BaseMarker :icon-src="step.iconSrc" />
        <div class="relative mt-6 text-2xl">
          <div
            v-show="index !== 0"
            class="absolute top-1/2 hidden border-b-[1px] border-dashed border-black xl:flex"
            :style="arrowPos(index)"
          >
            <NuxtImg
              src="/icons/triangle.svg"
              height="6"
              width="8"
              class="absolute -top-[4.9px]"
              :style="trianglePos(index)"
            />
          </div>

          <h3>{{ step.title }}</h3>
        </div>
        <p class="mt-5 font-light">{{ step.text }}</p>
      </div>
    </div>

    <div class="bg-white pb-10">
      <BaseVisitCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { steps } from '@/links'

const { smaller } = useBreakpoints(breakpointsTailwind)

const spacings = computed(() =>
  smaller('lg').value
    ? ['0', '50px', '50px', '50px']
    : ['0', '200px', '-45px', '185px'],
)

const arrowPos = (index: number) =>
  index % 2
    ? { left: '-250px', width: '180px' }
    : { right: '-280px', width: '280px' }

const trianglePos = (index: number) =>
  index % 2 ? { right: '0' } : { left: '0', rotate: '180deg' }

const heroData = {
  title: 'Säljprocess med Logistri',
  text: 'Logistri är ett växande fastighetsbolag som äger och förvaltar fastigheter som är operationellt kritiska för våra hyresgästers verksamheter',
  imageSrc: '/image.png',
}
</script>
