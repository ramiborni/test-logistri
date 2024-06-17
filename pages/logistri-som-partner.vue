<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <div class="v-container mt-10 bg-smoke py-14">
      <h2 class="text-center text-3xl tracking-wide md:text-4xl">
        Logistri är ett växande fastighetsbolag.
      </h2>
      <div
        class="mx-auto mt-20 grid grid-cols-1 justify-items-center gap-10 md:gap-20 lg:w-[80%] lg:grid-cols-3"
      >
        <BaseKeypoint v-for="item in 6" :key="item" :index="item" plain />
      </div>
    </div>

    <div class="v-container grid grid-cols-2 gap-5 bg-white pt-24">
      <BaseHotspot
        v-for="item in projectLinks"
        :key="item.image"
        :item="item"
        project
      />
    </div>

    <BaseVisitCard class="bg-white py-16" />
  </div>
</template>
<script setup lang="ts">
import { projectLinks } from '@/links'

const heroData = {
  title: 'Ett långsiktigt partnerskap',
  text: 'Logistri är ett växande fastighetsbolag som äger och förvaltar fastigheter som är operationellt kritiska för våra hyresgästers verksamheter',
  imageSrc: '/image.png',
}
</script>
