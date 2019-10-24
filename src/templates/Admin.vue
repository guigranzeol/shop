<template>
  <span>
    <bar-top userRoute="/user" cartRouter="/cart"></bar-top>
    <nav-bar>
      <nav-bar-li name="Female" src="#" />
      <nav-bar-li name="Male" src="#" />
      <nav-bar-li name="Childish" src="#" />
      <nav-bar-li name="Sport" src="#" />
      <nav-bar-li name="Styles" src="#" />
    </nav-bar>//TODO criar components Banner
    //TODO Pesquisar pluguins para colocar os Banners
  </span>
</template>

<script>
import BarTop from "@/components/templates/NavBarTop/BarTop";
import NavBar from "@/components/templates/NavBarTop/NavBar";
import NavBarLi from "@/components/templates/NavBarTop/NavBarLi";

export default {
  components: {
    BarTop,
    NavBar,
    NavBarLi
  }
};
</script>

<style>
</style>