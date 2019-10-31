<template> 
  <div class="carousel">

      <v-carousel-item
        :src="src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >

        <v-row justify="end" align="center">
          <v-col md="6" col="6" class="text" align="center" v-if="title && text">
            <div class="carousel-text">
              <h2 v-bind:class="colorTitle">{{ title }}</h2>
              <p v-bind:class="colorText">{{ text }}</p>
              <a :href="buttonHref"><button v-if="buttonText" class="corousel-button">{{ buttonText }}</button></a>
            </div>
          </v-col>
        </v-row>

        <v-sheet></v-sheet>
      </v-carousel-item>
  </div>
</template>


<script>
export default {
  data() { 
          
    return {};
  },
  props: {
    src: {String},
    title: {String},
    colorTitle: {String},
    text: {String},
    colorText: {String},
    buttonText:{String},
    buttonHref:{String}
  }
};
</script>

<style scoped>
.carousel{
  position: relative;
}

.text {
  color: black;
  align-items: center;
  position: absolute;
  height: 100%;
  top: 0;
  right: 5%;
  padding: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2{
  font-size: 3rem;
}

button{
  margin-top: 30px;
}
</style>