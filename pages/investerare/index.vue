<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <NuxtLayout name="investrare">
      <div class="v-container pb-10">
        <p class="text-center font-light italic md:text-lg">
          Vi har som målsättning att agera transparent för att i den mån det är
          möjligt underlätta marknadens värdering av bolaget genom att förse
          aktieägare och finansmarknaden med tydlig information. Logistri
          Fastighets AB blev under andra halvåret 2017 noterat på Spotlight
          Stock Market. Här hittar du aktieinformation, pressmeddelanden och
          finansiella rapporter.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div
          class="bg-moss px-6 py-7 text-mint md:px-12 md:py-14 lg:aspect-[1/0.9]"
        >
          <h3 class="text-2xl">Finansiella rapporter</h3>
          <p class="mt-4 font-light">
            Logistri är en närvarande fastighetsaktör med en ambition att växa i
            takt med att våra hyresgäster växer. Vi ska utveckla och förvalta
            ändamålsenliga lokaler i samarbete med våra hyresgäster och
            långsiktigt stödja dessa i sin dagliga verksamhet.
          </p>
          <p class="mt-8 font-light">
            Utöver detta så för vi en aktiv dialog med nya potentiella
            hyresgäster som antingen vill hyra lokaler eller är intresserade av
            att sälja sina fastigheter och på så sätt låta oss agera långsiktig
            hyresvärd.
          </p>
        </div>
        <div class="relative">
          <BaseButton
            title="Finansiella rapporter"
            variant="white"
            class="absolute bottom-4 right-4"
          />

          <NuxtImg
            src="/images/warehouse.png"
            loading="lazy"
            format="webp"
            quality="30"
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div
        class="my-0 flex flex-col items-center gap-4 lg:flex-grow lg:flex-row"
      >
        <iframe
          class="mt-32 w-full"
          height="450px"
          src="https://widget.datablocks.se/api/rose/widgets/kpi-waterfall?token=28c807c5-6b3e-45fd-93bf-cf14ddc1a352"
        ></iframe>
        <div>
          <div class="min-w-[400px] rounded-lg bg-[#D9D9D933] px-2 py-10">
            <div
              v-if="kpiData.length > 0"
              class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2"
            >
              <div v-for="kpi in kpiData" :key="kpi.name" class="text-center">
                <p class="my-2 text-3xl font-bold text-black">
                  {{ kpi.formattedValue }}
                </p>
                <h3 class="text-lg font-normal text-black">{{ kpi.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="my-6 flex flex-col items-center gap-6 lg:flex-row">
        <iframe
          class="overflow-none mt-10 w-full"
          height="500px"
          src="https://widget.datablocks.se/api/rose/widgets/stock-chart?token=d8b035aa-5193-492f-8245-dfb5b7bc023f&load-highcharts=true"
        ></iframe>
        <div class="bg-smoke p-8 md:p-16 lg:aspect-[1/0.75] lg:w-[65%]">
          <div class="gap-6 py-4 md:py-10">
            <h3 class="text-2xl font-medium">David Träff</h3>
            <h4 class="mt-2 leading-7 tracking-wide">Investerarrelationer</h4>

            <p class="mt-5 max-w-[680px] font-light">
              Ingeborg har mångårig erfarenhet från finansbranschen och är
              ansvarig för bolagets relationer med investerare.
            </p>

            <div class="mt-10 flex items-center font-light">
              <span class="font-bold">Telefon: </span>
              <span class="pl-1 pt-[3px] text-sm md:pt-[1px] md:text-base"
                >074934323</span
              >
            </div>
            <div class="font-light">
              <span class="font-bold">E-post: </span>
              <span class="text-sm md:text-base"
                >ingeborg.magnusson@logistri.se</span
              >
            </div>

            <BaseButton title="Kontakta oss" variant="black" class="mt-8" />
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface KpiData {
  name: string
  value: number
  unit: string
  label: string
}

definePageMeta({
  name: 'investerare',
})

const heroData = {
  title: 'Investerare',
  text: 'Vi har som målsättning att agera transparent för att i den mån det är möjligt underlätta marknadens värdering av bolaget genom att förse aktieägare och finansmarknaden med tydlig information. Logistri Fastighets AB blev under andra halvåret 2017 noterat på Spotlight Stock Market. Här hittar du aktieinformation, pressmeddelanden och finansiella rapporter.',
  imageSrc: '/image.png',
}

const KPI_API_URL =
  'https://widget.datablocks.se/api/rose/widgets/kpi-dashboard?token=68f8b61a-ce0d-4d63-8bd3-d7cdd32a1adb&type=json'

const { data: rawKpiData } = await useFetch<KpiData[]>(KPI_API_URL, {
  server: true,
})

const kpiData = computed(() => {
  if (!rawKpiData.value) return []

  return rawKpiData.value.map((kpi) => ({
    ...kpi,
    formattedValue: formatValue(kpi.value, kpi.unit),
  }))
})

const formatValue = (value: number, unit: string) => {
  if (unit === 'MSEK') return `${value.toLocaleString()} MSEK`
  if (unit === '%') return `${value.toFixed(1)}%`
  if (value >= 1000) return `${value.toLocaleString()}`
  return value.toString()
}
</script>

<style>
/* Add any global styles here if needed */
</style>

<!--

  <div class="flex flex-col bg-smoke sm:flex-row lg:w-[35%] lg:flex-col">
          <NuxtImg
            src="/images/garage.png"
            loading="lazy"
            format="webp"
            quality="30"
            class="aspect-square w-full sm:w-5/12 lg:min-h-[300px] lg:w-full"
          />

          <div
            class="flex w-full flex-col justify-between space-y-3 px-7 py-8 sm:w-7/12 lg:w-full lg:space-y-3 lg:py-5"
          >
            <h4 class="text-2xl">Prenumerera</h4>
            <p class="text-sm font-light">
              Du kan prenumerera på Logistri Fastighets pressmeddelanden via
              Cision
            </p>
            <BaseButton title="Klicka här" variant="black" class="max-w-32" />
          </div>
        </div>
-->
