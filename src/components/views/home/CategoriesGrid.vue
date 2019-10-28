<template>
  <span>
    <h1 class="mt-5 text-center">More Categories</h1>
    <section class="default my-5">
      <div class="img-1">
        <router-link :to="route1">
          <v-img class="img-default img-1" :src="img1" alt>
            <div class="img-info">
              <P>{{ title1}} </P>
            </div>
          </v-img>
        </router-link>
      </div>
      <div class="img-2">
        <router-link :to="route2">
          <v-img class="img-default img-2" :src="img2" alt>
            <div class="img-info">
              <P>{{ title2 }} </P>
            </div>
          </v-img>
        </router-link>
      </div>
      <div class="img-3">
        <router-link :to="route3">
          <v-img class="img-default img-3" :src="img3" alt>
            <div class="img-info">
              <P>{{ title3 }}</P>
            </div>
          </v-img>
        </router-link>
      </div>
      <div class="img-4">
        <router-link :to="route4">
          <v-img class="img-default img-4" :src="img4" alt>
            <div class="img-info">
              <P>{{ title4 }}</P>
            </div>
          </v-img>
        </router-link>
      </div>
    </section>
  </span>
</template>

<script>
export default { //TODO Alinhar texto do hover centro, e configurar melhor as imagens na tela
  props: {
    route1: {},
    route2: {},
    route3: {},
    route4: {},
    img1: {},
    img2: {},
    img3: {},
    img4: {},
    title1:{},
    title2:{},
    title3:{},
    title4:{}
  }
};
</script>

<style  scoped>
.img-default {
  position: relative;
  width: 100%;
  height: 100%;
  
}

.img-info {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  color: rgba(0, 0, 0, 0);
  background: rgba(0, 0, 0, 0);
  
}

.img-info P {
  font-size: 35px;
  text-align: center;
  margin: 20px 0 0 0;
}

.img-info:hover {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.664);
}

.img-1 {
  grid-area: img-1;
  background: black;
  max-height: 60vh;
  overflow: hidden;
}

.title-1 {
  display: block;
}

.title-1:hover {
  display: none;
}

.img-2 {
  grid-area: img-2;
  background: purple;
  max-height: 30vh;
}

.img-3 {
  grid-area: img-3;
  background: red;
  max-height: 30vh;
}

.img-4 {
  grid-area: img-4;
  background: yellow;
  max-height: 60vh;
}

.default {
  display: grid;
  grid-gap: 20px;
  margin: 0 auto;
  max-width: 1920px;
  padding: 10px;
  grid-template-areas:
    "img-1 img-2  img-4"
    "img-1 img-3  img-4";
}

.img-default:hove {
  width: 1000px;
}
</style>