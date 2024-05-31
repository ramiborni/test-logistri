<template>
  <div class="v-container max-w-screen-xxl bg-smoke">
    <div
      class="grid w-full grid-cols-1 gap-y-4 py-10 lg:grid-cols-3 lg:py-[70px]"
    >
      <div class="max-w-60">
        <NuxtImg src="/logo.png" class="w-40 lg:w-56" quality="10" />
        <p class="mt-5 text-xs font-light leading-5">
          Logistri utvecklar och förvaltar lager- och lättindustrifastigheter
        </p>
      </div>

      <div
        class="order-last mr-8 hidden grid-cols-2 gap-1 md:grid lg:order-none"
      >
        <div v-for="link in footerLinks" :key="link.title">
          <NuxtLink :to="link.url">{{ link.title }}</NuxtLink>

          <NuxtLink
            v-for="sublink in link.sublinks"
            :key="sublink.title"
            :to="sublink.url"
            class="mt-4 block text-sm font-light"
          >
            {{ sublink.title }}
          </NuxtLink>
        </div>
      </div>

      <BaseContactForm />

      <div class="mt-8 md:hidden">
        <BaseAccordion
          v-for="(link, index) in footerLinks"
          :key="index"
          :link="link"
          :index="index"
        />
      </div>
    </div>

    <div
      class="flex w-full flex-col items-center gap-y-4 border-gray-200 py-5 text-sm font-light leading-6 md:flex-row md:justify-between md:border-t-[1px]"
    >
      <span> © Logistri AB (publ) All Rights Reserved </span>

      <div
        class="flex flex-col items-center justify-between gap-y-4 md:flex-row md:justify-between"
      >
        <NuxtLink to="/" class="mr-7">Om Pareto Business Management</NuxtLink>
        <NuxtLink to="/" class="underline">Integritetspolicy</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { footerLinks } from '@/links'
</script>
