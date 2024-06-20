<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <NuxtLayout name="investrare">
      <div class="flex flex-col justify-between gap-10 md:gap-14 lg:flex-row">
        <BaseKeypoint v-for="item in 3" :key="item" :index="item" plain dark />
      </div>

      <div class="mb-6 mt-14 grid grid-cols-1 lg:grid-cols-2">
        <NuxtImg
          src="/images/hotspot-3.png"
          loading="lazy"
          format="webp"
          quality="30"
          class="aspect-[1/0.9] h-full w-full object-cover object-center"
        />

        <div
          class="bg-moss px-6 py-7 text-mint md:px-12 md:py-14 lg:aspect-[1/0.9]"
        >
          <h3 class="text-2xl">Logistri i korthet</h3>
          <div
            v-for="item in keypoints"
            :key="item"
            class="mt-2 flex gap-2 font-light tracking-wide"
          >
            <div
              class="mt-2.5 h-1.5 min-h-1.5 w-1.5 min-w-1.5 rounded-full bg-mint"
            ></div>

            <p>
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'investera-i-logistri',
})

const heroData = {
  title: 'Investera i Logistri',
  text: 'Logistri är ett växande fastighetsbolag som äger och förvaltar fastigheter som är operationellt kritiska för våra hyresgästers verksamheter',
  imageSrc: '/image.png',
}

const keypoints = [
  'Verksamheten startade 1952 i Stockholm, då två framåtriktade byggmästare slog ihop sina bolag.',
  'Sedan 1994 noterade på Nasdaq Stockholm Mid Cap',
  'Fastigheter med centrala lägen i Stockholmsregionen och Mälardalen',
  'Segment: hyresbostäder och samhällsfastigheter',
  'Bestånd: 58 fastigheter, varav 12 samhällsfastigheter (Mars 2024)',
]
</script>
