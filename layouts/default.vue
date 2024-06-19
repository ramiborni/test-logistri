<template>
  <div class="mx-auto max-w-screen-xxl font-[Inter]">
    <AppHeader />
    <div :class="[$route.name !== 'homepage' && 'pt-[77px] lg:pt-[85px]']">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
<script lang="ts" setup></script>
