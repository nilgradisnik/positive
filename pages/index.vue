<template>
  <section class="container center" ref="container">
    <navigation/>
    <logo/>
    <social/>
  </section>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Social from '~/components/Social.vue'
import Logo from '~/components/Logo.vue'

const bgs = [1, 2, 4, 5, 6, 7, 8]

export default {
  components: {
    Navigation,
    Social,
    Logo
  },

  mounted () {
    this.$refs.container.className += ` bg${bgs[getRandomInt(bgs.length)]}`
  }
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}
</script>

<style lang="stylus">
index-bgs = bg1, bg2, bg4, bg5, bg6, bg7, bg8

.container
  for bg in index-bgs
    &.{bg}
      retina-image(bg + '.png')
</style>
