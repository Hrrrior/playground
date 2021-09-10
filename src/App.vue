<template>
  <div>
    <div id="fb-root"></div>
        <v-header />
        <!-- <router-view :key="$route.fullPath" /> -->
        <v-footer />
  </div>
  <router-view/>
</template>

<style lang="scss">
@import "@/assets/scss/global.scss";
</style>
<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
  name: 'App',
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>
