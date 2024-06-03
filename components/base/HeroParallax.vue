<template>
  <div
    class="flex h-[380px] w-full max-w-screen-xxl items-center justify-center text-4xl font-medium lg:h-[550px]"
  >
    <div
      class="fixed left-1/2 top-[90px] -z-10 h-[350px] w-[calc(100%-40px)] -translate-x-1/2 lg:top-[105px] lg:h-[502px] lg:w-[calc(100%-160px)] xxl:w-[calc(1560px-160px)]"
    >
      <div class="flex h-full w-full items-center justify-center">
        <div
          class="z-30 w-11/12 space-y-2.5 text-white lg:w-[55%] lg:space-y-5"
        >
          <h2 class="text-center text-2xl font-medium lg:text-[35px]">
            {{ props.title }}
          </h2>

          <p class="text-center text-xs font-light lg:text-xl">
            {{ props.text }}
          </p>
        </div>

        <BaseOverlay class="z-10 rounded-[45px]" />

        <NuxtImg
          :src="props.imageSrc"
          class="absolute -z-10 h-full w-full rounded-[45px] object-cover object-center"
          quality="10"
          format="webp"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  text: string
  imageSrc: string
}

const props = defineProps<Props>()
</script>
