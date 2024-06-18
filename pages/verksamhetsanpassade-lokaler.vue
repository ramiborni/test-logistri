<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />
    <BaseInfoBlock title="Lokaler" mint />
    <BaseInfoBlock title="Mark" mint reverse class="!pt-0" />
    <HomePressfeed external />
  </div>
</template>

<script setup lang="ts">
const heroData = {
  title: 'Verksamhetsanpassade lokaler',
  text: 'Logistri är ett växande fastighetsbolag som äger och förvaltar fastigheter som är operationellt kritiska för våra hyresgästers verksamheter',
  imageSrc: '/image.png',
}
</script>
