<template>
  <div id="nav-bar">
    <v-row>
      <div class="categoryMenu">
        <ul>
          <slot></slot>
        </ul>
      </div>
      <div class="allCategory">
        <button><v-icon class="icon-color">mdi-menu</v-icon></button>
      </div>
    </v-row>
  </div>

  
</template>

<script>
export default {

}
</script>

<style scoped>

#nav-bar{
  position: relative;
}

.categoryMenu{
  width: 70%;
  margin: auto;
}

ul{
  display: flex;
  width: 100%;
  text-align: center;
}

li{
  flex: 1;
  list-style-type: none;
  padding: 15px;
}

.allCategory{
  position: absolute;
  left: 20px;
  display: flex;
  height: 100%;
}

.icon-color{
  font-size: 3rem;
}

</style>