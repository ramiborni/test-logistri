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
          <h2 class="mb-12 text-center text-3xl font-bold">Ledning</h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div
              v-for="(member, index) in leadershipMembers"
              :key="index"
              class="overflow-hidden rounded-lg bg-white"
            >
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">
                  {{ member.name }}
                </h3>
                <p class="mb-4 text-sm text-gray-600">{{ member.title }}</p>
                <p class="mb-4 text-gray-700">{{ member.description }}</p>
                <a
                  v-if="member.email"
                  :href="`mailto:${member.email}`"
                  class="text-blue-600 hover:underline"
                >
                  {{ member.email }}
                </a>
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
  name: 'ledning',
})

const heroData = {
  title: 'Investerare',
  text: 'Vi har som målsättning att agera transparent för att i den mån det är möjligt underlätta marknadens värdering av bolaget genom att förse aktieägare och finansmarknaden med tydlig information. Logistri Fastighets AB blev under andra halvåret 2017 noterat på Spotlight Stock Market. Här hittar du aktieinformation, pressmeddelanden och finansiella rapporter.',
  imageSrc: '/image.png',
}

interface LeadershipMember {
  name: string
  title: string
  description: string
  email?: string
}

const leadershipMembers: LeadershipMember[] = [
  {
    name: 'David Truff',
    title: 'Verkställande direktör',
    description:
      'David har lång erfarenhet av fastighetsbranschen och har tidigare arbetat som fastighetschef på Logistri. Han har en gedigen bakgrund inom fastighetsförvaltning och utveckling av logistikfastigheter.',
    email: 'david.truff@logistri.se',
  },
  {
    name: 'Ulf Attebrant',
    title: 'COO och vice VD',
    description:
      'Ulf har över 20 års erfarenhet från fastighetsbranschen och har tidigare arbetat som COO på flera ledande fastighetsbolag.',
    email: 'ulf.attebrant@logistri.se',
  },
  {
    name: '[XX]',
    title: 'CFO',
    description: 'Information om CFO kommer att uppdateras.',
  },
  {
    name: 'Johan Ahlström',
    title: 'Fastighetschef',
    description:
      'Johan har omfattande erfarenhet inom fastighetsförvaltning och har tidigare arbetat som fastighetschef för flera stora logistikfastigheter i Sverige.',
    email: 'johan.ahlstrom@logistri.se',
  },
]
</script>
