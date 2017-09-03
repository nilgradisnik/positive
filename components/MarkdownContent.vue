<template>
  <section class="container md" @click="onNavigation" :class="'show' + pageIndex" ref="cmd">
    <slot></slot>
  </section>
</template>

<script>
export default {
  data () {
    return {
      clientWidth: 0,
      maxIndex: 0,
      pageIndex: 0
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.clientWidth = this.$el.clientWidth
      this.children = this.$refs.cmd.children
      this.maxIndex = this.children.length - 1

      const index = parseInt(window.location.hash.substr(1), 10)
      if (index && index <= this.maxIndex) this.pageIndex = index

      this.children[this.pageIndex].style.display = 'block'
    })
  },

  methods: {
    onNavigation (e) {
      const navigateNext = e.clientX > (this.clientWidth / 3)
      if (navigateNext) {
        if (this.pageIndex === this.maxIndex) this.pageIndex = 0
        else this.pageIndex++
      } else {
        if (this.pageIndex === 0) this.pageIndex = this.maxIndex
        else this.pageIndex--
      }

      window.location.hash = '#' + this.pageIndex

      for (var i = 0; i <= this.maxIndex; i++) {
        this.children[i].style.display = 'none'
      }
      this.children[this.pageIndex].style.display = 'block'
    }
  }
}
</script>
