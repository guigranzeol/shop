<template>
  <section class="most-seen">
    <h2 class="text-center carouselMostSeenTitle container">Most Seen</h2>
    <carousel perPage="5" scrollPerPage="true" class="carousel container">

      <slide>
        <div class="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2017/10/04/18/11/road-2817102__340.jpg" alt />
        </div>
      </slide>

      <slide>
        <div class="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2019/10/25/10/13/sunflower-4576573__340.jpg" alt />
        </div>
      </slide>

      <slide>
        <div class="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2019/10/01/21/39/caravansary-4519431__340.jpg"
            alt />
        </div>
      </slide>

      <slide>
        <span class="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2019/10/18/05/51/mountain-4558300__340.jpg" alt />
        </span>
      </slide>

      <slide>
        <span class="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2017/10/04/18/11/road-2817102__340.jpg" alt />
        </span>
      </slide>

      <slide>
        <span class="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2017/10/04/18/11/road-2817102__340.jpg" alt />
        </span>
      </slide>

      <slide>
        <span class="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2017/10/04/18/11/road-2817102__340.jpg" alt />
        </span>
      </slide>

      <slide>
        <span class="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2017/10/04/18/11/road-2817102__340.jpg" alt />
        </span>
      </slide>

    </carousel>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel"; // TODO Refazer com cards depois que estiver pronto os cards da pagina de busca de produtos
export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>
.most-seen{
  width: 80%;
  margin: 50px auto;
}

.container{
  margin: auto !important;
}

.carousel-item {
  display: flex;
  justify-content: center;
  max-width: 20vw;
  margin: 10px 10px 20px 10px;
}

.carousel-item img {
  height: 100%;
  width: 100%;
  border: solid 1px blakc;
  border-radius: 10px;
}

.carousel {
  display: flex;
  margin: 0 10px 0 10px;
}
</style>