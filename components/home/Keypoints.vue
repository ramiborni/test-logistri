<template>
  <div
    class="v-container flex w-full flex-col items-center gap-10 bg-smoke py-10 lg:flex-row lg:items-start lg:py-20"
  >
    <p class="text-2xl tracking-wider lg:w-[47%] lg:text-4xl lg:leading-[58px]">
      Logistri är ett växande fastighetsbolag.
    </p>

    <div class="grid w-10/12 grid-cols-1 gap-16 lg:w-[53%] lg:grid-cols-2">
      <BaseKeypoint v-for="item in 4" :key="item" :index="item" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
