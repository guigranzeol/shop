<template>
  <admin>

    <v-carousel height="70vh" progress="">
      <carousel-default
        src="/images/banner/banner-1.jpg"
        title="Lorem ipsum"
        colorTitle="white--text"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolor delectus reiciendis sequi ducimus quo rerum, laboriosam perferendis, facilis quia blanditiis! Id eius, cumque totam vel eveniet debitis libero sint."
        colorText="white--text"
        buttonText="Hello World"
        buttonHref="helloworld"
      />
      <carousel-default
        src="/images/banner/banner-2.jpg"
        title="Other"
        colorTitle="grey--text text--darken-4"
        text="Lorem ipsum or delectus reiciendis sequi ducimus quo rerum, laboriosam perferendis, facilis quia blanditiis! Id eius, cumque totam vel eveniet debitis libero sint."
        colorText="grey--text"
        buttonText="Other"
        buttonHref="/Other"
      />
    </v-carousel>

    <categories-grid
     title1="Sise 419x578" route1="man" img1="/images/categories/male.jpg"
     title2="Sise 685x276" route2="boots" img2="/images/categories/woman.jpg"
     title3="Sise 685x276" route3="looks" img3="/images/categories/childen.jpg"
     title4="Sise 419x578" route4="woman" img4="/images/categories/female.jpg"
    />

    <hr>
    
    <carousel-most-seen/>

  </admin>
</template>

<script>
import Admin from "@/templates/Admin";
import CarouselDefault from "@/components/reusables/CarouselDefault";
import CategoriesGrid from "@/components/views/home/CategoriesGrid";
import CarouselMostSeen from "@/components/reusables/CarouselMostSeen";

export default {
  name: "Home",
  components: {
    Admin,
    CarouselDefault,
    CategoriesGrid,
    CarouselMostSeen
  }
};
</script>

<style scouped>
  hr{
    width: 60%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 50px auto;
  }
</style>
