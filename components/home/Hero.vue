<template>
  <div
    class="flex h-[618px] w-full max-w-screen-xxl items-center text-4xl font-medium"
  >
    <div
      class="fixed top-0 -z-10 flex h-[618px] w-full max-w-screen-xxl items-center justify-center rounded-b-[45px] xxl:px-[1px]"
    >
      <div class="v-container w-full">
        <h1
          class="mx-auto max-w-screen-lg text-center text-[23px] font-medium leading-[30px] tracking-[0.6px] text-white lg:text-[35px] lg:leading-[50px]"
        >
          Logistri är ett växande fastighetsbolag som äger och förvaltar
          fastigheter som är operationellt kritiska för våra hyresgästers
          verksamheter
        </h1>
      </div>

      <video
        v-if="y < (smaller('lg') ? 1400 : 700)"
        autoplay
        muted
        loop
        playsinline
        class="absolute top-0 -z-10 h-[618px] w-full rounded-b-[45px] object-cover object-center xxl:px-[1px]"
      >
        <source
          src="https://videos.pexels.com/video-files/6595364/6595364-hd_1280_720_24fps.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const { smaller } = useBreakpoints(breakpointsTailwind)
const { y } = useWindowScroll()
</script>
