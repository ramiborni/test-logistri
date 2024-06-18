<template>
  <div class="xl:w-48">
    <h3 class="text-3xl md:text-4xl lg:text-[80px] lg:leading-[90px]">
      {{ counter }}%
    </h3>
    <h4 class="text-sm xl:text-[17px]">Kundnöjdhet</h4>
  </div>
</template>

<script setup lang="ts">
interface Props {
  range: number | string
}

const props = defineProps<Props>()

const counter = ref(0)
const intervalDuration = ref(40)
const intervalID = ref()

onMounted(() => {
  startInterval()
})

const startInterval = () => {
  intervalID.value = setInterval(updateCounter, intervalDuration.value)
}

const updateCounter = () => {
  if (counter.value < +props.range) {
    counter.value++
  }

  if (+props.range - counter.value < 30) {
    clearInterval(intervalID.value)
    intervalDuration.value = 70
    startInterval()
  }

  if (+props.range - counter.value < 10) {
    clearInterval(intervalID.value)
    intervalDuration.value = 130
    startInterval()
  }
}
</script>
