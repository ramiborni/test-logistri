<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <NuxtLayout name="investrare">
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-4xl overflow-hidden rounded-lg">
            <div class="p-8">
              <h1
                class="mb-6 text-center text-4xl font-bold text-gray-900 md:text-5xl"
              >
                Bolagsstämmor
              </h1>
              <p class="mb-8 text-lg leading-relaxed text-gray-700">
                Bolagsstämman är Logistri Fastighets AB:s högsta beslutande
                organ. Samtliga aktieägare har rätt att delta, få ett ärende
                behandlat samt rösta för sina aktier. Vid årsstämman väljs
                bolagets styrelse, externa revisorer och bolagets årsredovisning
                fastställs.
              </p>

              <h2 class="mb-4 text-2xl font-bold text-gray-900">
                Årsstämma den 25 april 2024
              </h2>
              <p class="mb-6 text-lg leading-relaxed text-gray-700">
                Aktieägarna i Logistri Fastighets AB (publ), kallades till
                årsstämma torsdag den 25 april 2024 klockan 10.00 i Pareto
                Business Management AB:s lokaler på Berzelii Park 9, våning 9, i
                Stockholm.
              </p>

              <div class="space-y-4">
                <a
                  v-for="(link, index) in links"
                  :key="index"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#1a2e1a] px-6 py-3 text-base font-medium text-white hover:bg-[#243524] focus:outline-none focus:ring-2 focus:ring-[#1a2e1a] focus:ring-offset-2"
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
                  {{ link.text }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="h-screen"></div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  name: 'bolagsstammor',
})

const heroData = {
  title: 'Investerare',
  text: 'Vi har som målsättning att agera transparent för att i den mån det är möjligt underlätta marknadens värdering av bolaget genom att förse aktieägare och finansmarknaden med tydlig information. Logistri Fastighets AB blev under andra halvåret 2017 noterat på Spotlight Stock Market. Här hittar du aktieinformation, pressmeddelanden och finansiella rapporter.',
  imageSrc: '/image.png',
}

const links = ref([
  {
    text: 'Kommuniké från årsstämma',
    url: '/docs/logistri_kommuniké_fraan_aarsstaemma.pdf',
  },
  {
    text: 'Kallelse till årsstämma',
    url: '/docs/logistri_kallelse_till_arsstamma.pdf',
  },
  {
    text: 'Styrelsens förslag',
    url: '/docs/logistri_styrelsens-foerslag-till-utdelning-inkl-yttrande.pdf',
  },
  { text: 'Fullmaktsformulär', url: '/docs/fullmaktsformulaer.pdf' },
  {
    text: 'Förslag till ny bolagsordning',
    url: '/docs/logistri_foerslag-till-ny-bolagsordning.pdf',
  },
])
</script>
