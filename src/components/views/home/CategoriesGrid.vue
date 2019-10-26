<template>
  <span >
    <h1 class="mt-5">Mais Categorias </h1>
      <section class="default my-5">
        
       
        <div class="img-1">
          <img src="" alt="">
        </div>
        <div class="img-2">
          <img src="" alt="">
        </div>
        <div class="img-3">
          <img src="" alt="">
        </div>
        <div class="img-4">
          <img src="" alt="">
        </div>
        
      </section>
  </span>
</template>

<script>
export default {

}
</script>

<style  scoped>

.img-1{
  grid-area: img-1;
  background: black;
  height: 60vh;
}

.img-2{
  grid-area: img-2;
  background: purple;
}

.img-3{
  grid-area: img-3;
  background: red;
}

.img-4{
  grid-area: img-4;
  background: yellow
}

.default{
  display: grid;
  grid-gap: 20px;
  margin: 0 auto;
  max-width: 1920px;
  padding: 10px;
  grid-template-areas:
    'img-1 img-2  img-3'
    'img-1 img-4  img-3'  
}


</style>