<template>
  <div id="nav-top">
    <v-container>
      <v-row align="center" justify="center" class="text-center">
        <v-col md="3" cols="12" class="text-center">
          <img class="img-class" :src="imgTop" alt />
        </v-col>
        <v-col class="search-class" cols="12" md="6">
          <input type="text" />
          <button>
            <v-icon>mdi-magnify</v-icon>
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

.search-class input {
  text-align: center;
}

.search-class input {
  border: solid black 1px;
  border-radius: 20px 0 0 20px;
  width: 360px;
  height: 45px;
  font-size: 20px;
  outline: 0;
  background: white;
}

.search-class button {
  border: solid black 1px;
  border-radius: 0px 20px 20px 0px;
  width: 40px;
  height: 45px;
  font-size: 20px;
  outline: 0;
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