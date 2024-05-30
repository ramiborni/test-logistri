<template>
  <div class="mt-6 md:mt-0 md:w-8/12 lg:w-full">
    <span>Kontakta oss</span>

    <form
      id="contactForm"
      class="mt-5 grid grid-cols-2 gap-1 gap-y-2"
      @submit.prevent="onFormSubmit"
    >
      <BaseInput v-model="formData.name" placeholder="Namn" required />
      <BaseInput v-model="formData.lastName" placeholder="Efternamn" required />

      <BaseInput
        v-model="formData.email"
        placeholder="E-post"
        class="col-span-2"
        type="email"
        required
      />
    </form>

    <BaseButton
      title="Skicka"
      variant="black"
      class="mt-4"
      type="submit"
      form="contactForm"
    />

    <p class="mt-3 text-xs font-light">
      Genom att trycka på skicka accepterar du vår integritetspolicy.
    </p>
  </div>
</template>

<script setup lang="ts">
interface FormData {
  name: string
  lastName: string
  email: string
}

const formData = reactive<FormData>({
  name: '',
  lastName: '',
  email: '',
})

// const errors = reactive<FormData>({
//   name: '',
//   lastName: '',
//   email: '',
// })

function onFormSubmit() {
  Object.entries(formData).forEach(([key, value]) => {
    console.log(key, ':', value)
  })
}
</script>
