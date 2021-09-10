<template>
  <section class="l-section l-section--sec1"><v-clock/></section>
  <section class="l-section l-section--sec2">Test </section>
</template>

<script>
// @ is an alias to /src
import DigitalClock from '@/components/DigitalClock/DigitalClock.vue'
export default {
  name: 'Home',
  components: { 'v-clock': DigitalClock }
}
</script>
