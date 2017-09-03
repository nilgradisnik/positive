<template>
  <markdown-content>
    <page0 class="content index"/>
    <page1 class="content food food1"/>
    <page2 class="content food food2"/>
    <page3 class="content food food3"/>
    <page4 class="content food food4"/>
  </markdown-content>
</template>

<script>
import MarkdownContent from '~/components/MarkdownContent.vue'

import Page0 from '~/content/food/index.vue'
import Page1 from '~/content/food/food1.vue'
import Page2 from '~/content/food/food2.vue'
import Page3 from '~/content/food/food3.vue'
import Page4 from '~/content/food/food4.vue'

export default {
  components: {
    MarkdownContent,
    Page0,
    Page1,
    Page2,
    Page3,
    Page4
  }
}
</script>

<style lang="stylus">
.food
  background-repeat: no-repeat
  background-position: bottom
  &.food1
    retina-image('food1.png')
    background-color: rgba(27,61,69,1)
  &.food2
    retina-image('food2.png')
    background-color rgba(10,23,40,1)
  &.food3
    retina-image('food3.png')
    background-color rgba(51,53,51,1)
  &.food4
    retina-image('food4.png')
    background-color rgba(140,160,161,1)
</style>
