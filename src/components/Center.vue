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
   // width: 400px;
   // height: 400px;
   flex-wrap: wrap;
   max-width: 500px;

   p {
     color: blue;
     min-width: 200px;
     min-height: 200px;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: rgb(105, 117, 133);
     margin: 1%;
   }
 }



</style>
