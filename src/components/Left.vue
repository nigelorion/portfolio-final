<template>
  <div class="main">
    <transition name="fade" mode="out-in">
      <h1>nigel orion</h1>

    </transition>
    <p>web developer.</p>
    <p>portland, oregon</p>
    <a href="#">about</a>
    <a href="#">portfolio</a>

  </div>
</template>

<script>
export default {
  name: 'Left',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .main {

 }
 .fade-enter-active, .fade-leave-active {
   transition: opacity .3s ease;
 }
 .fade-enter, .fade-leave-to
 /* .component-fade-leave-active below version 2.1.8 */ {
   opacity: 0;
 }

</style>
