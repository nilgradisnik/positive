<template>
  <section class="container center" :class="bgClass">
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

  data () {
    return {
      bgClass: `bg${bgs[getRandomInt(0, bgs.length)]}`
    }
  }
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
</script>

<style lang="stylus">
index-bgs = bg1, bg2, bg4, bg5, bg6, bg7, bg8

.container
  background-color: rgba(37,37,46,0.47)
  for bg in index-bgs
    &.{bg}
      retina-image(bg + '.png')
</style>
