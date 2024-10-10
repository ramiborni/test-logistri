<template>
  <div class="mt-6 md:mt-0 md:w-8/12 lg:w-full">
    <span>Kontakta oss</span>

    <form
      id="contactForm"
      class="mt-5 grid grid-cols-2 gap-1 gap-y-2"
      @submit.prevent="onFormSubmit"
    >
      <BaseInput
        :key="'namn' + formKey"
        v-model="formData.namn"
        placeholder="Namn"
        required
        :class="{ 'border-red-500': v$.namn.$error }"
      />
      <div v-if="v$.namn.$error" class="text-xs text-red-500">
        {{ v$.namn.$errors[0].$message }}
      </div>

      <BaseInput
        :key="'efternamn' + formKey"
        v-model="formData.efternamn"
        placeholder="Efternamn"
        required
        :class="{ 'border-red-500': v$.efternamn.$error }"
      />
      <div v-if="v$.efternamn.$error" class="text-xs text-red-500">
        {{ v$.efternamn.$errors[0].$message }}
      </div>

      <BaseInput
        :key="'email' + formKey"
        v-model="formData.email"
        placeholder="E-post"
        class="col-span-2"
        type="email"
        required
        :class="{ 'border-red-500': v$.email.$error }"
      />
      <div v-if="v$.email.$error" class="text-xs text-red-500">
        {{ v$.email.$errors[0].$message }}
      </div>
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
import { reactive, ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

// Define form data structure
interface FormData {
  namn: string
  efternamn: string
  email: string
}

const formData = reactive<FormData>({
  namn: '',
  efternamn: '',
  email: '',
})

// Add a key to force re-render of BaseInput components
const formKey = ref(0)

// Custom email validator
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
const isValidEmail = (value: string) => emailRegex.test(value)

// Define validation rules
const rules = computed(() => ({
  namn: {
    required: helpers.withMessage('Namn är obligatoriskt', required),
    minLength: helpers.withMessage(
      'Namn måste vara minst 2 tecken',
      minLength(2),
    ),
  },
  efternamn: {
    required: helpers.withMessage('Efternamn är obligatoriskt', required),
    minLength: helpers.withMessage(
      'Efternamn måste vara minst 2 tecken',
      minLength(2),
    ),
  },
  email: {
    required: helpers.withMessage('E-post är obligatoriskt', required),
    isValidEmail: helpers.withMessage(
      'Ange en giltig e-postadress',
      isValidEmail,
    ),
  },
}))

// Create a Vuelidate instance
const v$ = useVuelidate(rules, formData)

// Function to reset form data
function resetForm() {
  Object.keys(formData).forEach((key) => {
    formData[key as keyof FormData] = ''
  })
  v$.value.$reset()
  formKey.value++ // Increment the key to force re-render
}

// Function to submit form data to the Make.com webhook
async function onFormSubmit() {
  // Validate the form
  const isFormCorrect = await v$.value.$validate()

  // If the form is not valid, stop here
  if (!isFormCorrect) return

  // Make.com Webhook URL
  const webhookUrl =
    'https://hook.eu2.make.com/5ughq1ek4ttqxvs83gzu69r1ogjlae4q'

  // Prepare the form data as URL-encoded (just in case Make.com prefers this)
  const formDataToSubmit = new URLSearchParams({
    namn: formData.namn,
    efternamn: formData.efternamn,
    email: formData.email,
  })

  // Send the form data to the Make.com webhook using fetch
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataToSubmit.toString(), // URL-encoded form data
    })

    if (response.ok) {
      alert('Formuläret har skickats framgångsrikt!')
      // Reset the form after successful submission
      resetForm()
    } else {
      console.error('Formulärinlämning misslyckades:', response)
      alert('Det gick inte att skicka formuläret')
    }
  } catch (error) {
    console.error('Formulärinlämningsfel:', error)
    alert('Ett fel uppstod när formuläret skulle skickas')
  }
}
</script>