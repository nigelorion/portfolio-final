<template>
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <div id="app">
    <div class="title">
      <h1>nigel orion</h1>
      <p>web developer.</p>
      <p>portland, oregon</p>
      <button v-on:click="aboutToggle()" type="button" name="button">about</button>
      <button v-on:click="portfolioToggle()" type="button" name="button">portfolio</button>
    </div>
    <div class="aboutAndPortfolio">
      <transition name="slide-fade" mode="out-in">
        <Center v-if="portfolioState" class="sections"/>
      </transition>
      <transition name="slide-fade" mode="out-in">
        <About v-if="aboutState" class="sections"/>
      </transition>
    </div>
    <Right class="sections"/>
  </div>
</template>

<script>

import Center from './components/Center.vue'
import Right from './components/Right.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    Center,
    Right,
    About
  },
  data () {
    return {
      aboutState: true,
      portfolioState: false
    }
  },
  methods: {
    aboutToggle: function () {
      this.aboutState = true
      this.portfolioState = false

    },
    portfolioToggle: function () {
      this.aboutState = false
      this.portfolioState = true

    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Montserrat');

body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: rgb(23, 23, 23);
}

* {
  box-sizing: border-box;
  transition: all 400ms;
}

#app {
  font-family:'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(208, 221, 233);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sections, .title {
  margin: 5%;
}

.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}
</style>
