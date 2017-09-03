<template>
  <markdown-content>
    <page0 class="content index"/>
    <page1 class="content food1"/>
    <page2 class="content food2"/>
    <page3 class="content food3"/>
    <page4 class="content food4"/>
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
