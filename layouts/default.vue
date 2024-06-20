<template>
  <div class="mx-auto max-w-screen-xxl font-[Inter]">
    <AppHeader @open-menu="mobileMenu = true" />
    <AppMobileMenu :opened="mobileMenu" @close-menu="mobileMenu = false" />
    <div :class="[$route.name !== 'homepage' && 'pt-[77px] lg:pt-[85px]']">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
const mobileMenu = ref(false)
</script>
