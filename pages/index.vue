<template>
  <section class="container bg1">
    <navigation/>
    <logo/>
    <social/>
  </section>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Social from '~/components/Social.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Navigation,
    Social,
    Logo
  }
}
</script>

<style lang="stylus">
.container
  background-color: rgba(37,37,46,0.47)
</style>
