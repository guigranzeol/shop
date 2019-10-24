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
        <v-col class="icons-class text-left font-color" cols="12" md="3" >
            <a :href="userRoute"><v-icon>mdi-account-outline</v-icon>Entrar </a> <br>
            <a :href="cartRouter" ><v-icon >mdi-cart-outline</v-icon>Carrinho</a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    imgTop: require("@/assets/logo.png") //TODO Alterar para PRops
  })
};
</script>

<style scoped>
.img-class {
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

.icons-class a{
    text-decoration:none;
    font-size: 20px;
    margin-top: 5px; 
}

.icons-class i{
    text-decoration:none;
    font-size: 30px;
}


@media (max-width: 960px) 
{
  .search-class input {
    width: 200px;
  }
}

</style>