<template>
  <nav class="header-nav">
    <a class="icn_food" href="food">Food</a>
    <a class="icn_potions" href="potions">Potions</a>
    <a class="icn_ethos" href="ethos">Ethos</a>
    <a class="icn_potions" href="moments">Moments</a>
    <a class="icn_order" href="order">Order</a>
  </nav>
</template>

<style lang="stylus">
nav-icons = icn_food,
            icn_potions,
            icn_ethos,
            icn_order
.header-nav
  display: flex
  flex: 1
  position: absolute
  top: 0
  a
    margin: 0 4px
    padding: 48px 6px 0 6px
    color: white
    font-size: 12px
    font-weight: bold
    text-transform: uppercase
    background-repeat: no-repeat
    background-position: center center
  for icn in nav-icons
    .{icn}
      retina-image(icn + '.png')

</style>
