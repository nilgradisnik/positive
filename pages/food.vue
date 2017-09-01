<template>
  <section class="container md">
    <food-index class="content index show"/>
    <food-one class="content food food1"/>
  </section>
</template>

<script>
import FoodIndex from '~/content/food/index.vue'
import FoodOne from '~/content/food/food1.vue'

export default {
  components: {
    FoodIndex,
    FoodOne
  }
}
</script>

<style lang="stylus">
food-bgs = food1

.food
  background-color: rgba(27,61,69,1)
  background-repeat: no-repeat
  background-position: bottom
  for bg in food-bgs
    &.{bg}
      retina-image(bg + '.png')
</style>
