<template> 
  <div> 
    <v-carousel height="60vh">
      <v-carousel-item
        src="https://cdn.pixabay.com/photo/2015/10/12/15/18/clothing-store-984396__340.jpg"
  reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row justify="end" align="center">
          <v-col md="5" col="5" class="text" align="center">
            <div >
              <h3 :class="titleClass">TESTE</h3>
              <p :class="textClass">Lorem ipsum dolor sincidunt vel soluta distinctio quia veritatis non dolores nemo. Necessitatibus?</p>
              <button :class="buttonClass">Go</button>
            </div>
          </v-col>
        </v-row>
        <v-sheet></v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>


<script>
export default {
  data() { //Finalizar Carousel
    return {};
  }
};
</script>

<style scoped>
.text {
  color: white;
  padding: 10vh 12vw 0 0;
}

.text button{
    background: red;
    padding: 5px;
    border-radius: 8px
}
</style>