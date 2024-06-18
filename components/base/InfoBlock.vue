<template>
  <div
    class="v-container flex flex-col bg-white py-8 lg:flex-row lg:py-16"
    :class="[props.reverse && 'lg:flex-row-reverse']"
  >
    <div class="py-8 lg:w-[53%] xl:py-[60px]" :class="[classModifiers]">
      <h2 class="text-3xl lg:text-4xl">
        {{ props.title || 'Logistri är ett växande fastighetsbolag.' }}
      </h2>

      <p class="mt-4 lg:mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus
        semper tellus et accumsan. Praesent nisl nibh, sodales at eros luctus,
        tempus consectetur justo. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Integer ipsum orci, gravida.
      </p>

      <p class="mt-4 lg:mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus
        semper tellus et accumsan. Praesent nisl nibh, sodales at eros luctus,
        tempus consectetur justo. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Integer ipsum orci, gravida.
      </p>
    </div>

    <div
      class="relative aspect-[1/0.7] lg:aspect-[1/0.9] lg:w-[47%] xl:max-w-[650px]"
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
  title?: string
  mint?: boolean
}

const props = defineProps<Props>()

const classModifiers = computed(() => {
  if (props.mint) return 'px-8 xl:px-24 bg-mint'

  return props.reverse
    ? 'lg:pl-8 xl:pl-24 bg-white'
    : 'lg:pr-8 xl:pr-24 bg-white'
})
</script>
