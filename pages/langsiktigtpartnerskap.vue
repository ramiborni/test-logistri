<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <BaseInfoBlock />
    <BaseInfoBlock reverse class="!pt-0" />
  </div>
</template>

<script setup lang="ts">
const heroData = {
  title: 'Ett långsiktigt partnerskap',
  text: 'Logistri är ett växande fastighetsbolag som äger och förvaltar fastigheter som är operationellt kritiska för våra hyresgästers verksamheter',
  imageSrc: '/image.png',
}
</script>
