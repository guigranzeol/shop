<template>
  <span>
      <bar-top 
        topClass="green lighten-5 class-scss"
        buttonClass="blue"
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