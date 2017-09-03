'use strict'

const clientWidth = {
  data () {
    return {
      clientWidth: 0,
      pageIndex: 0
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.clientWidth = this.$el.clientWidth
    })
  },

  methods: {
    onNavigation (e) {
      const navigateNext = e.clientX > (this.clientWidth / 3)
      const maxIndex = this.pages - 1
      if (navigateNext) {
        if (this.pageIndex === maxIndex) this.pageIndex = 0
        else this.pageIndex++
      } else {
        if (this.pageIndex === 0) this.pageIndex = maxIndex
        else this.pageIndex--
      }
    }
  }
}

export { clientWidth }
