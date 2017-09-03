<template>
  <markdown-content class="page-moments">
    <page0 class="content index"/>
    <page1 class="content moments1"/>
    <page2 class="content moments2"/>
    <page3 class="content moments3"/>
    <page4 class="content moments4"/>
  </markdown-content>
</template>

<script>
import MarkdownContent from '~/components/MarkdownContent.vue'

import Page0 from '~/content/moments/index.vue'
import Page1 from '~/content/moments/moments1.vue'
import Page2 from '~/content/moments/moments2.vue'
import Page3 from '~/content/moments/moments3.vue'
import Page4 from '~/content/moments/moments4.vue'

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
