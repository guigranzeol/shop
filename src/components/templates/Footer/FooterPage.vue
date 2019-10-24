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

}
</script>

<style scoped>
.default {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}

</style>