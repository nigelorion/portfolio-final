<template>
  <div id="app">
    <Left class="sections"/>
    <Center class="sections"/>
    <Right class="sections"/>
  </div>
</template>

<script>
import Left from './components/Left.vue'
import Center from './components/Center.vue'
import Right from './components/Right.vue'

export default {
  name: 'app',
  components: {
    Left,
    Center,
    Right
  }
}
</script>

<style lang="scss">

body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: #334e52;
}

* {
  box-sizing: border-box;
  transition: all 400ms;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(208, 221, 233);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sections {
  margin: 5%;
}

</style>
