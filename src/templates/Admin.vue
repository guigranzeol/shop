<template>
  <span>
      <bar-top 
        userRoute="/user"
        cartRouter="/cart"
       ></bar-top>
       <nav-bar></nav-bar>
  </span>
</template>

<script>
import BarTop from '@/components/templates/NavBarTop/BarTop'
import NavBar from '@/components/templates/NavBarTop/NavBar'

export default {
  components: {
    BarTop,
    NavBar,
  }
}
</script>

<style>

</style>