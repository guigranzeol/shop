<template>
  <span>
    <h2 class="default my-5 moreCategoriesTitle">Main categories</h2>
    <section class="default my-5">
      <div class="img-1">
        <router-link :to="route1">
          <v-img class="img-default img-1" :src="img1" alt>
            <div class="img-info">
              <P>{{ title1 }} </P>
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
export default {
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
h2{
  padding-top: 30px;
}

.img-default {
  position: relative;
  width: 100%;
  height: 100%;
}

.img-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: rgba(0, 0, 0, 0);
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-info P {
  font-size: 35px;
  text-align: center;
  margin: 20px 0 0 0;
}

.img-info:hover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  background: rgba(0, 0, 0, 0.664);
}

.img-1 {
  grid-area: img-1;
  background: black;
  max-height: 578px;
  overflow: hidden;
}

.img-2 {
  grid-area: img-2;
  background: purple;
  max-height: 276px;
}

.img-3 {
  grid-area: img-3;
  background: red;
  max-height: 276px;
}

.img-4 {
  grid-area: img-4;
  background: yellow;
  max-height: 578px;
}

.default {
  display: grid;
  grid-gap: 20px;
  margin: auto;
  max-width: 1700px;
  grid-template-areas:
    "img-1 img-2 img-4"
    "img-1 img-3 img-4";
}
</style>