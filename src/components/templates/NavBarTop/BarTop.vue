<template>
  <div id="nav-top">
    <v-container>
      <v-row align="center" justify="center" class="text-center">
        <v-col md="3" cols="12" class="text-center">
          <img class="img-class" :src="imgTop" alt />
        </v-col>
        <v-col class="search-class" cols="12" md="6">
          <input type="text" />
          <button class="background-gray-hover">
            <v-icon class="text-primay">mdi-magnify</v-icon>
          </button>
        </v-col>
        <v-col class="icons-class text-left font-color" cols="12" md="3">
          <a :href="cartRouter" ><v-icon class="background-icon-top-menu">mdi-cart</v-icon></a>
          <a :href="userRoute"><v-icon class="background-icon-top-menu">mdi-account</v-icon> </a>            
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    imgTop: require("@/assets/images/logo.png")
  })
};
</script>

<style scoped>
.img-class {
  color:red;
  height: 70px;
  width: auto;
}

.search-class{
  position: relative;
  height: 50px;
}

.search-class input {
  border-radius: 25px;
  width: 100%;
  height: 100%;
  font-size: 20px;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 20px;
}

.search-class button {
  border-radius: 25px;
  width: 80px;
  height: 100%;
  font-size: 20px;
  top: 0;
  right: 0;
  position: absolute;
}

.icons-class{
  display: flex;
  width: 70%;
  padding: 0 70px;
}

.icons-class a{
  flex: 1;
  text-align: center;
}

.icons-class i{
  padding: 10px;
  font-size: 30px;
}

</style>