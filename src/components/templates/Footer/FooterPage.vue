<template>
  <span>
      <footer id="footer" class="default">
          <v-row>
              <v-col md="4" cols="12"><slot name="col1"></slot></v-col>
              <v-col md="4" cols="12"><slot name="col2"></slot></v-col>
              <v-col md="4" cols="12"><slot name="col3"></slot></v-col>
          </v-row>
      </footer>
  </span>
</template>

<script>
export default {

}   //TODO Acertar Classe pra ficar fixo botton
</script> 

<style scoped>
.default {
    position: relative;
    top: 1vh;
    margin-top:auto;
}

</style>