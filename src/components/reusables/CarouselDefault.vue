<template> 
  <div>
      <v-carousel-item
        :src="src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row justify="end" align="center">
          <v-col md="5" col="5" class="text" align="center">
            <div  id="carousel-text">
              <h2 >{{ title }}</h2>
              <p >{{ text }}</p>
              <button id="corousel-button">{{ buttonText}}</button>
            </div>
          </v-col>
        </v-row>
        <v-sheet></v-sheet>
      </v-carousel-item>
  </div>
</template>


<script>
export default {
  data() { //Corrigir alinhamento Carousel
          //Colocar click botao
    return {};
  },
  props: {
    src: {String},
    title: {String},
    text: {String },
    buttonText:{String}
  }
};
</script>

<style scoped>
.text {
  color: black;
  padding: 12vw 5vw 0 5vw;
  align-items: center;
  background: rgba(216, 203, 203, 0.76);
  height: 70vh;
}

.text button{
    padding: 10px;
    border-radius: 15px;  
}
</style>