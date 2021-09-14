<template>
  <section class="l-section l-section--sec1 grid">
    <div class="grid--sidebarLeft">
      <v-clock />
      <v-weather/>
    </div>
  </section>
  <section class="l-section l-section--sec2 grid">
    <div class="grid--leftCenter">
      <v-animated>#coffeeisgood</v-animated>
      </div>
      <!-- <div class="text-container grid--sidebarRight"> -->
        <v-animated-container class="grid--sidebarRight">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nam debitis provident officiis, dolores cumque deserunt, possimus iure cum, architecto adipisci molestiae. Repudiandae soluta incidunt doloribus! Dolor quo at et. Obcaecati tempora aspernatur inventore ad esse accusamus nam iure, est quo. Necessitatibus in pariatur minima vel consequatur placeat fugiat voluptas vero veritatis et accusantium, animi, modi unde a distinctio harum recusandae! Sapiente doloribus culpa minus suscipit natus mollitia perferendis facilis amet earum placeat reiciendis ab veritatis enim magnam ullam eaque deleniti libero dolore, eum dolorum praesentium vitae necessitatibus dolores iste. Incidunt quidem obcaecati unde? Illo itaque repellat quidem blanditiis aliquam.
        </v-animated-container>
      <!-- </div> -->
  </section>
</template>

<script>
// @ is an alias to /src
import DigitalClock from '@/components/DigitalClock/DigitalClock.vue'
import AnimatedText from '@/components/AnimatedText/AnimatedText.vue'
import Weather from '@/components/Weather/Weather.vue'
import AnimatedTextContainer from '@/components/AnimatedTextContainer/AnimatedTextContainer.vue'
export default {
  name: 'Home',
  components: { 'v-clock': DigitalClock, 'v-animated': AnimatedText, 'v-animated-container': AnimatedTextContainer, 'v-weather': Weather }
}
</script>
