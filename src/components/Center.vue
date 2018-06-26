<template>
  <div class="main">
    <div class="projects">
      <p>hbailey</p>
      <p>spotify</p>
      <p>hunt</p>
      <p>starwars</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Center',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .main {

 }

 .projects {
   display: flex;
   width: 400px;
   height: 400px;
   border: solid 1px red;
   flex-wrap: wrap;
   p {
     color: blue;
     width: 200px;
     height: 200px;
   }
 }



</style>
