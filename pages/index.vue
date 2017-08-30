<template>
  <section class="container">
    <navigation/>
    <div>
      <logo/>
    </div>
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
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  background: url('/bg1.png') no-repeat center center fixed
  background-size: cover
.links
  padding-top: 15px

</style>
