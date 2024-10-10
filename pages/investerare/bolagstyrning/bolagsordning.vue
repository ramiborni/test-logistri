<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <NuxtLayout name="investrare">
      <div class="h-screen">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-3xl overflow-hidden rounded-lg bg-gray-50">
            <div class="p-8">
              <h2 class="mb-6 text-center text-3xl font-bold">Bolagsordning</h2>
              <p class="mb-8 text-lg leading-relaxed text-gray-700">
                Logistri Fastighets AB:s bolagsordning fastställer grundläggande
                regler för vårt företag. Dokumentet innehåller viktig
                information om vår verksamhet, aktiekapital, styrelse,
                bolagsstämmor och räkenskapsår. Bolagsordningen antogs på
                bolagsstämman den 7 april 2021.
              </p>
              <div class="flex justify-center">
                <a
                  href="https://l.cdn.bequoted.com/1/bolagsordning-for-logistri-fastigheter-ab-publ-95098/Logistri_Bolagsordning.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center rounded-md border border-transparent bg-[#1a2e1a] px-6 py-3 text-base font-medium text-white hover:bg-[#243524] focus:outline-none focus:ring-2 focus:ring-[#1a2e1a] focus:ring-offset-2"
                >
                  <svg
                    class="-ml-1 mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Ladda ner Bolagsordning
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'bolagsordning',
})

const heroData = {
  title: 'Investerare',
  text: 'Vi har som målsättning att agera transparent för att i den mån det är möjligt underlätta marknadens värdering av bolaget genom att förse aktieägare och finansmarknaden med tydlig information. Logistri Fastighets AB blev under andra halvåret 2017 noterat på Spotlight Stock Market. Här hittar du aktieinformation, pressmeddelanden och finansiella rapporter.',
  imageSrc: '/image.png',
}
</script>
