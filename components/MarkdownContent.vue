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
      this.maxIndex = this.$refs.cmd.children.length - 1

      const index = parseInt(window.location.hash.substr(1), 10)
      if (index && index <= this.maxIndex) this.pageIndex = index

      this.showPage()
    })
  },

  methods: {
    onNavigation (e) {
      if (e.clientX > (this.clientWidth / 3)) {
        if (this.pageIndex === this.maxIndex) this.pageIndex = 0
        else this.pageIndex++
      } else {
        if (this.pageIndex === 0) this.pageIndex = this.maxIndex
        else this.pageIndex--
      }

      window.location.hash = '#' + this.pageIndex

      this.hideAll()
      this.showPage()
    },
    hideAll () {
      for (var i = 0; i <= this.maxIndex; i++) {
        this.$refs.cmd.children[i].style.display = 'none'
      }
    },
    showPage () {
      this.$refs.cmd.children[this.pageIndex].style.display = 'flex'
    }
  }
}
</script>
