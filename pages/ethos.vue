<template>
  <markdown-content class="page-ethos">
    <page0 class="content index"/>
    <page1 class="content ethos1"/>
    <page2 class="content ethos2"/>
  </markdown-content>
</template>

<script>
import MarkdownContent from '~/components/MarkdownContent.vue'

import Page0 from '~/content/ethos/index.vue'
import Page1 from '~/content/ethos/ethos1.vue'
import Page2 from '~/content/ethos/ethos2.vue'

export default {
  components: {
    MarkdownContent,
    Page0,
    Page1,
    Page2
  }
}
</script>

<style lang="stylus">
.page-ethos
  .ethos1,
  .ethos2
    h1
      flex-grow: 1
.ethos-person
  width: 100%
  text-align: center
  align-self: flex-end
  h3
    text-transform: none
    font-style: italic
</style>
