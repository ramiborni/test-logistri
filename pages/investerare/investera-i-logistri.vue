<template>
  <div>
    <BaseHeroParallax
      :title="heroData.title"
      :text="heroData.text"
      :image-src="heroData.imageSrc"
    />

    <NuxtLayout name="investrare">
      <div class="flex flex-col justify-between gap-10 md:gap-14 lg:flex-row">
        <BaseKeypoint v-for="item in 3" :key="item" :index="item" plain dark />
      </div>

      <div class="mb-6 mt-14 grid grid-cols-1 lg:grid-cols-2">
        <NuxtImg
          src="/images/hotspot-3.png"
          loading="lazy"
          format="webp"
          quality="30"
          class="aspect-[1/0.9] h-full w-full object-cover object-center"
        />

        <div
          class="bg-moss px-6 py-7 text-mint md:px-12 md:py-14 lg:aspect-[1/0.9]"
        >
          <h3 class="text-2xl">Logistri i korthet</h3>
          <div
            v-for="item in keypoints"
            :key="item"
            class="mt-2 flex gap-2 font-light tracking-wide"
          >
            <div
              class="mt-2.5 h-1.5 min-h-1.5 w-1.5 min-w-1.5 rounded-full bg-mint"
            ></div>

            <p>
              {{ item }}
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-screen mx-auto my-16 bg-blue-50 p-16">
        <h1 class="mb-16 text-4xl font-bold">Varför investera i Logistri?</h1>
        <div class="space-y-16">
          <div
            v-for="(item, index) in investmentReasons"
            :key="index"
            class="flex"
          >
            <div class="mr-4  text-8xl font-bold text-teal-200">
              {{ index + 1 }}
            </div>
            <div>
              <h2 class="mb-2 text-2xl font-semibold">{{ item.title }}</h2>
              <p class="text-gray-700">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'investera-i-logistri',
})

const heroData = {
  title: 'Investera i Logistri',
  text: 'Logistri är ett växande fastighetsbolag som äger och förvaltar fastigheter som är operationellt kritiska för våra hyresgästers verksamheter',
  imageSrc: '/image.png',
}

const investmentReasons = [
  {
    title: 'Långsiktiga kundrelationer',
    description:
      'Logistri är en stabil och långsiktig partner till våra hyresgäster i verksamhetsanpassade och hållbara lokaler. Detta skapar förutsättningar för ett bra samarbete och högt kundförtroende med hyresgäster som väljer att stanna framför att flytta.',
  },
  {
    title:
      'Fastighetssegment med stabil efterfrågan - "fastigheter som behövs"',
    description:
      'Logistris fastigheter utgör en operationellt och strategiskt viktig tillgång för våra hyresgäster. Lokalerna används för produktion, centrallager eller liknande och är kritiska för deras verk-samhet. Förändrade leverantörskedjor och en vilja att flytta produktion närmare konsumenten förstärker efterfrågan på lokaler för produktion och lager i Sverige.',
  },
  {
    title: 'Fokus på kassaflöde, stabil avkastning och konservativ risk',
    description:
      'Detta möjliggörs av starkt kassaflöde underbyggt av en genomgående hög överskottsgrad tack vare att merparten av hyresgästerna är trippel- och dubbelnettoavtal med stor mot-ståndskraft mot kostnadsökningar. En lång räntebindning, genomsnittlig ränta om 2,95 % och en räntebindningsgrad om starka 5 ggr skapar förutsättningar för ett stabilt och förutsägbart kassaflöde. Detta i kombination med god riskspridning av bolagets intäkter skapar en mot-ståndskraft mot förändrerliga marknadsförhållanden.',
  },
  {
    title: 'Stark balansräkning och växande utdelningsförmåga',
    description:
      'Logistri har sedan bolagets grundande 2017 betalat en kvartalsvis utdelning och samtidigt haft en underliggande värdetillväxt årlig värdestillväxt om över 10 %. Framåt har bolaget en avsikt att öka utdelningen över tid. Efter emissionen i november har bolaget tillförts nytt kapital och ambitionen är att dra nytta av att det nu är möjligt att göra attraktiva tilläggsförvärv. Detta kommer öka den löpande avkastningen och kassaflödet och därmed utrymmet för en successivt ökande utdelning.',
  },
]

const keypoints = [
  'Verksamheten startade 1952 i Stockholm, då två framåtriktade byggmästare slog ihop sina bolag.',
  'Sedan 1994 noterade på Nasdaq Stockholm Mid Cap',
  'Fastigheter med centrala lägen i Stockholmsregionen och Mälardalen',
  'Segment: hyresbostäder och samhällsfastigheter',
  'Bestånd: 58 fastigheter, varav 12 samhällsfastigheter (Mars 2024)',
]
</script>
