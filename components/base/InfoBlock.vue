<template>
  <div
    class="v-container flex flex-col bg-white py-8 lg:flex-row lg:py-16"
    :class="[props.reverse && 'lg:flex-row-reverse']"
  >
    <div
      class="bg-white py-8 lg:w-[53%] xl:py-[60px]"
      :class="[props.reverse ? 'lg:pl-8 xl:pl-24' : 'lg:pr-8 xl:pr-24']"
    >
      <h2 class="text-3xl lg:text-4xl">
        Logistri är ett växande fastighetsbolag.
      </h2>

      <p class="mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus
        semper tellus et accumsan. Praesent nisl nibh, sodales at eros luctus,
        tempus consectetur justo. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Integer ipsum orci, gravida.
      </p>

      <p class="mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus
        semper tellus et accumsan. Praesent nisl nibh, sodales at eros luctus,
        tempus consectetur justo. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Integer ipsum orci, gravida.
      </p>
    </div>

    <div
      class="relative aspect-[1/0.6] bg-red-100 lg:aspect-[1/0.9] lg:w-[47%] xl:max-w-[600px]"
    >
      <NuxtImg
        src="/images/drone-capture.png"
        format="webp"
        loading="lazy"
        quality="10"
        class="absolute h-full w-full object-cover object-center"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  reverse?: boolean
}

const props = defineProps<Props>()
</script>
