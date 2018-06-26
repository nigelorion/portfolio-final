<template>
  <div class="main">
    <div class="wrapper">
      <a href="#">github</a>
      <a href="#">linkedin</a>
      <a href="#">email</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Right',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .main {

 }

 .wrapper {
   display: flex;
   flex-direction: column;
   a {
     margin: 5%;
     color: white;
     text-decoration: none;
     transition: all 350ms;
     &:hover {
       color: grey;
       background-color: white;
     }
   }
 }

</style>
