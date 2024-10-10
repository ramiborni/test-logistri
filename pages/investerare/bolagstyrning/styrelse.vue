<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <NuxtLayout name="investrare">
      <section class="bg-gray-100 py-16">
        <div class="container mx-auto lg:px-8">
          <div class="mx-auto mb-12 max-w-4xl text-center">
            <h2
              class="text-2xl font-semibold leading-tight text-gray-900 md:text-3xl"
            >
              Styrelsen besitter betydande kunskaper inom fastighetsutveckling,
              ekonomisk analys och innehar en grundlig förståelse för svenska
              industribolag.
            </h2>
          </div>

          <div class="space-y-12">
            <div
              v-for="member in boardMembers"
              :key="member.name"
              class="overflow-hidden rounded-lg bg-white"
            >
              <div class="md:flex">
                <div class="p-8">
                  <div
                    class="text-sm font-semibold uppercase tracking-wide text-[#1a2e1a]"
                  >
                    {{ member.title }}
                  </div>
                  <h3 class="mt-1 text-xl font-semibold text-gray-900">
                    {{ member.name }}
                  </h3>
                  <p class="mt-2 text-gray-600">{{ member.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-16 rounded-lg p-8">
            <h2 class="mb-6 text-2xl font-semibold text-gray-900 md:text-3xl">
              Revisor
            </h2>
            <div class="overflow-hidden rounded-lg bg-white">
              <div class="p-8">
                <h3 class="text-xl font-semibold text-gray-900">
                  {{ auditor.name }}
                </h3>
                <div
                  class="mt-1 text-sm font-semibold uppercase tracking-wide text-[#1a2e1a]"
                >
                  {{ auditor.title }}
                </div>
                <p class="mt-2 text-gray-600">{{ auditor.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'styrelse',
})

const heroData = {
  title: 'Investerare',
  text: 'Vi har som målsättning att agera transparent för att i den mån det är möjligt underlätta marknadens värdering av bolaget genom att förse aktieägare och finansmarknaden med tydlig information. Logistri Fastighets AB blev under andra halvåret 2017 noterat på Spotlight Stock Market. Här hittar du aktieinformation, pressmeddelanden och finansiella rapporter.',
  imageSrc: '/image.png',
}

const boardMembers = [
  {
    name: 'Henrik Viktorsson',
    title: 'Ordförande',
    description:
      'Född: 1975 | Antal aktier: 610 664 (genom bolag, oberoende ledamot)\n\nEkonom med masterexamen i företagsekonomi, Handelshögskolan, Helsingfors.\n\nHenrik har över 20 års erfarenhet inom finansbranschen och är idag VD och Partner på Solidcap. Han är även styrelseordförande i Mälaråsen, styrelseledamot i Delarka Holding och Flexens. Henrik har tidigare arbetat i över 10 år som Investment Manager på Nordea Bank AB och som Senior Portfolio Manager och Deputy CIO på Alandia Försäkring.',
  },
  {
    name: 'Patrik von Hacht',
    title: 'Ledamot',
    description:
      'Född: 1961 | Antal aktier: 127 500 (Obereonde ledamot)\n\nEkonom med kandidatexamen inom redovisning och finansiering, Örebro Universitet\n\nPatrik har över 30 års erfarenhet inom revision, redovisning, finansiering och analys samt sitter som styrelseledamot i Leomar, AdMare Shipmanagement och Medway Invest. Patrik har tidigare arbetat som CFO i ett flertal bolag.',
  },
  {
    name: 'Mattias Ståhlgren',
    title: 'Ledamot',
    description:
      'Född: 1972 | Antal aktier: 318 679 (Oberoende ledamot)\n\nJurist med magisterexamen inom juridik, Stockholms universitet\n\nMattias har över 10 års erfarenhet från finansbranschen och är idag VD för Fareoffice och Farepayment. Mattias har tidigare arbetat som fondförvaltare på Remium där han förvaltade fonden Remium Småbolag Sverige.',
  },
  {
    name: 'Helena Elonsson',
    title: 'Ledamot',
    description:
      'Född: 1970 | Antal aktier: 0 (oberoende ledamot)\n\nCivilingenjör med masterexamen inom byggnadsteknik, Kungliga Tekniska Högskolan\n\nHelena har över 20 års erfarenhet inom projektledning, projektutveckling och fastighetsutveckling för större projekt med inriktning på köpcentrumhandel, bostäder och kontor i Norden. Helena är ansvarig för projektutveckling på Slättö Förvaltning och har tidigare haft seniora befattningar på bland annat Unibail-Rodamco, Heba, Strabag, Citycon och Fabege.',
  },
  {
    name: 'Robin Englén',
    title: 'Ledamot',
    description:
      'Född 1984 | Antal aktier: 0 (oberoende ledamot)\n\nMagisterexamen i företagsekonomi, inriktning redovisning och finans, Stockholms Universitet.\n\nRobin har över 15 års erfarenhet från fastighetsbranschen och revision och är idag Partner, CFO & styrelseledamot i Green Group. Han är även styrelseledamot i Preservium Property, Djurgårdsstadens Fastigheter, Parkando, Solid Equity med flera bolag. Robin har tidigare arbetat på Pareto Securities och varit vd för bland annat Mälaråsen, Fleming Properties och Origa Care. Tidigare var Robin revisor på Deloitte i Stockholm och Hong Kong.',
  },
]

const auditor = {
  name: 'Fredric Hävrén',
  title: 'Revisor',
  description:
    'Född: 1971\n\nCivilekonom, Linköpings Universitet\n\nFredric är auktoriserad revisor och partner inom EY och helt specialiserad på fastighetsområdet med mer än 20 ås erfarenhet från revision och konsultation inom fastighets- och byggbranschen. Fredric har stor börserfarenhet och är bland annat huvudansvarig revisor för Klövern, HEBA och Magnolia. Andra väsentliga uppdrag som Fredric har är Unibail Rodamco Sverige, Nordisk Renting, Bygga Bostäder och Byggvesta.',
}
</script>
