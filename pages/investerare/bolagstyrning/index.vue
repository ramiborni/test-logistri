<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <NuxtLayout name="investrare">
      <div class="h-screen">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Bolagsstyrning
            </h2>
            <Card class-name="max-w-3xl mx-auto">
              <CardContent class-name="p-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Logistris aktieägare styr bolaget direkt och indirekt genom de
                  beslutssystem som gäller för bolaget och verksamheten.
                  Bolagsstyrningen uppfyller de krav som ställs i
                  aktiebolagslagen, årsredovisningslagen, Spotlight Stock
                  Markets regelverk för emittenter, bolagets bolagsordning, god
                  sed på aktiemarknaden samt andra tillämpliga regler och
                  rekommendationer och interna styrdokument.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mt-4">
                  De interna styrdokumenten omfattar främst styrelsens
                  arbetsordning, instruktion för verkställande direktör,
                  instruktion för valberedning samt instruktion för ekonomisk
                  rapportering.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'bolagstyrning',
})

const heroData = {
  title: 'Investerare',
  text: 'Vi har som målsättning att agera transparent för att i den mån det är möjligt underlätta marknadens värdering av bolaget genom att förse aktieägare och finansmarknaden med tydlig information. Logistri Fastighets AB blev under andra halvåret 2017 noterat på Spotlight Stock Market. Här hittar du aktieinformation, pressmeddelanden och finansiella rapporter.',
  imageSrc: '/image.png',
}
</script>
