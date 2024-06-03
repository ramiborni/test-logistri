<template>
  <div class="v-container flex flex-col-reverse md:flex-row">
    <div class="flex-1 bg-[#B7DDE1] p-6 md:p-12">
      <h3 class="text-2xl font-medium">Ingeborg Magnusson</h3>
      <h4 class="mt-2 leading-7 tracking-wide">Investerarrelationer</h4>

      <p class="mt-5 max-w-[680px] font-light">
        Ingeborg har mångårig erfarenhet från finansbranschen och är ansvarig
        för bolagets relationer med investerare. Ingeborg har tidigare arbetat
        för Pareto Securities i New York och Stockholm med inriktning på
        marknadsföring och public relations.
      </p>

      <div class="items center mt-10 flex font-light">
        <span class="font-bold">Telefon: </span>
        <span class="pl-1 pt-[3px] text-sm md:pt-[1px] md:text-base"
          >074934323</span
        >
      </div>
      <div class="font-light">
        <span class="font-bold">E-post: </span>
        <span class="text-sm md:text-base">ingeborg.magnusson@logistri.se</span>
      </div>

      <BaseButton title="Kontakta oss" variant="black" class="mt-8" />
    </div>
    <div
      class="aspect-square h-[350px] flex-1 md:h-auto md:w-[350px] md:max-w-[375px]"
    >
      <NuxtImg
        src="/images/guy.png"
        class="h-full w-full object-cover object-top"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
