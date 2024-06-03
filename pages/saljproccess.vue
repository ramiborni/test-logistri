<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <div class="h-[1000px] bg-slate-200"></div>
  </div>
</template>

<script setup lang="ts">
const heroData = {
  title: 'Säljprocess med Logistri',
  text: 'Logistri är ett växande fastighetsbolag som äger och förvaltar fastigheter som är operationellt kritiska för våra hyresgästers verksamheter',
  imageSrc: '/image.png',
}
</script>
