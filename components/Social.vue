<template>
  <nav class="social-nav">
    <a class="icn_twitter" href="https://twitter.com" target="_blank"></a>
    <a class="icn_instagram" href="https://www.instagram.com/positivefoodco/" target="_blank"></a>
  </nav>
</template>

<style lang="stylus">
social-icons = icn_twitter, icn_instagram

.social-nav
  display: flex
  flex: 1
  position: absolute
  bottom: 0
  a
    width: 48px
    height: 48px
    margin: 0 10px 16px 10px
    background-repeat: no-repeat
    background-position: center center
  for icn in social-icons
    .{icn}
      retina-image(icn + '.png')
</style>
