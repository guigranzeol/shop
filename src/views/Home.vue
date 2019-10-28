<template>
  <admin>
    <v-carousel height="70vh" progress="">
      <carousel-default
        src="https://cdn.pixabay.com/photo/2016/01/27/04/32/books-1163695_960_720.jpg"
        title="Loren Ip"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolor delectus reiciendis sequi ducimus quo rerum, laboriosam perferendis, facilis quia blanditiis! Id eius, cumque totam vel eveniet debitis libero sint."
        buttonText="Hello World"
        buttonHref="helloworld"
      />
      <carousel-default
        src="https://cdn.pixabay.com/photo/2017/10/13/05/26/silk-tie-2846862_960_720.jpg"
        title="Other"
        text="Lorem ipsum or delectus reiciendis sequi ducimus quo rerum, laboriosam perferendis, facilis quia blanditiis! Id eius, cumque totam vel eveniet debitis libero sint."
        buttonText="Other"
        buttonHref="/Other"
      />
    </v-carousel>
    <categories-grid
     title1="MAN" route1="man" img1="https://image.shutterstock.com/image-photo/casually-handsome-confident-young-man-260nw-439433326.jpg"
     title2="BOOTS" route2="boots" img2="https://image.shutterstock.com/image-photo/ankle-boot-nubuck-leather-isolated-260nw-1162044976.jpg"
     title3="LOOKS" route3="looks" img3="https://cdn.pixabay.com/photo/2015/03/26/10/38/girl-691712__480.jpg"
     title4="WOMAN" route4="woman" img4="https://cdn.pixabay.com/photo/2019/09/16/09/30/alone-4480444__480.jpg"
    />
  </admin>
</template>

<script>
import Admin from "@/templates/Admin";
import CarouselDefault from "@/components/reusables/CarouselDefault";
import CategoriesGrid from "@/components/views/home/CategoriesGrid";

export default {
  name: "Home",
  components: {
    Admin,
    CarouselDefault,
    CategoriesGrid
  }
};
</script>
<style scouped>
</style>
