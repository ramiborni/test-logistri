<template>
  <div
    class="v-container grid grid-cols-1 gap-7 bg-white py-10 lg:grid-cols-2 lg:py-20"
  >
    <BaseHotspot
      v-for="item in hotspots"
      :key="item.image"
      :image-src="`/images/${item.image}.png`"
      :title="item.title"
      :text="item.text"
      :url="item.url"
    />
  </div>
</template>

<script setup lang="ts">
const hotspots = ref([
  {
    title: 'Försäljningsprocess med Logistri',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt risus. Proin nulla dui. Lorem ipsum dolor sit amet, consectetur.',
    image: 'hotspot-1',
    url: '/',
  },
  {
    title: 'Långsiktigt ägarskap',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt risus. Proin nulla dui. Lorem ipsum dolor sit amet, consectetur.',
    image: 'hotspot-2',
    url: '/',
  },
  {
    title: 'Logistri som partner',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt risus. Proin nulla dui. Lorem ipsum dolor sit amet, consectetur.',
    image: 'hotspot-3',
    url: '/',
  },
  {
    title: 'Verksamhetsanpassade lokaler',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt risus. Proin nulla dui. Lorem ipsum dolor sit amet, consectetur.',
    image: 'hotspot-4',
    url: '/',
  },
])
</script>
