<template>
  <span>
    <bar-top userRoute="/user" cartRouter="/cart"> </bar-top>
    <nav-bar>
      <default-li name="Female" src="#" />
      <default-li name="Male" src="#" />
      <default-li name="Childish" src="#" />
      <default-li name="Sport" src="#" />
      <default-li name="Styles" src="#" />
    </nav-bar>
    <slot></slot>
    <footer-page>
    <template v-slot:col1>Teste</template>
    <template v-slot:col2>Teste 2</template>
    <template v-slot:col3>Teste 3</template>
    </footer-page>
  </span>
</template>

<script>
import BarTop from "@/components/templates/NavBarTop/BarTop";
import NavBar from "@/components/templates/NavBarTop/NavBar";
import DefaultLi from "@/components/reusables/DefaultLi";
import FooterPage from "@/components/templates/Footer/FooterPage";

export default {
  components: {
    BarTop,
    NavBar,
    DefaultLi,
    FooterPage
  }
};
</script>

<style>
</style>