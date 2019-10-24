<template>
  <li class="default"><a :href="src">{{name}}</a></li>
</template>

<script>
export default {
 props:{
     name:{ String },
     src:{ String }
 }
}
</script>

<style scoped>
.default{
  flex: 1;
  list-style-type: none;
  padding: 15px;
}
</style>