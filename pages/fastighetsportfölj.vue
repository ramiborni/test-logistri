<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <div class="v-container w-full bg-white pb-4 pt-4 md:pb-10">
      <div class="flex w-full items-center bg-smoke">
        <div
          class="mx-auto flex w-full max-w-[875px] justify-between gap-4 px-4 py-10 md:px-8"
        >
          <BaseCounter v-for="item in [98, 90, 87]" :key="item" :range="item" />
        </div>
      </div>
    </div>

    <div class="v-container grid grid-cols-1 gap-4 bg-white md:grid-cols-2">
      <div
        v-for="item in 2"
        :key="item"
        class="aspect-[1/0.6] bg-black p-3 md:aspect-[1/0.7]"
      >
        <div
          class="relative h-full w-full overflow-hidden border-2 border-mint"
        >
          <NuxtImg
            src="/images/chart.png"
            loading="lazy"
            format="webp"
            quality="10"
            class="absolute h-full object-contain object-center"
          />
        </div>
      </div>
    </div>

    <div class="v-container bg-white pt-4">
      <div class="aspect-[1/0.6] w-full bg-black p-3 md:aspect-[1/0.4]">
        <div class="h-full w-full border-2 border-mint">
          <NuxtImg
            src="/images/chart-2.png"
            loading="lazy"
            format="webp"
            quality="10"
            class="h-full w-full object-cover object-center md:scale-[0.8]"
          />
        </div>
      </div>
    </div>

    <div class="v-container bg-white pb-4 pt-4 md:pb-14">
      <div class="relative aspect-[1/0.6] w-full md:aspect-[1/0.4]">
        <a href="https://maps.app.goo.gl/vRnXackTPo3iAY4n9" target="_blank">
          <BaseButton
            variant="white"
            title="Se fullständig karta"
            class="absolute bottom-8 left-8"
          />
        </a>

        <NuxtImg
          src="/images/map.png"
          loading="lazy"
          format="webp"
          class="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const heroData = {
  title: 'Våra fastighetsportfölj',
  text: 'Logistri är ett växande fastighetsbolag som äger och förvaltar fastigheter som är operationellt kritiska för våra hyresgästers verksamheter',
  imageSrc: '/images/woods.png',
}
</script>
