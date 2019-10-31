<template>
  <span>

    <bar-top userRoute="/user" cartRouter="/cart"> </bar-top>

    <nav-bar>
      <li-default name="Female" src="#" />
      <li-default name="Male" src="#" />
      <li-default name="Childish" src="#" />
      <li-default name="Sport" src="#" />
      <li-default name="Styles" src="#" />
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
import LiDefault from "@/components/reusables/LiDefault";
import FooterPage from "@/components/templates/Footer/FooterPage";

export default {
  components: {
    BarTop,
    NavBar,
    LiDefault,
    FooterPage
  }
};
</script>

<style>
</style>