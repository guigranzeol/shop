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

</style>