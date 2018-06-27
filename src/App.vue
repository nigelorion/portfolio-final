<template>
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <div id="app">
    <div class="title sections">
      <h1>nigel orion</h1>
      <p>web developer</p>
      <p>pdx</p>
      <button v-on:click="aboutToggle()" type="button" name="button">about</button>
      <button v-on:click="portfolioToggle()" type="button" name="button">portfolio</button>
    </div>
    <div class="aboutAndPortfolio sections">
      <transition name="slide-fade" mode="out-in">
        <Center v-if="portfolioState"/>
        <About v-if="aboutState"/>
      </transition>
    </div>
    <div class="contact sections">
      <a href="#">github</a>
      <a href="#">linkedin</a>
      <a href="#">email</a>
    </div>
  </div>
</template>

<script>

import Center from './components/Center.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    Center,
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
  color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 700px) {
    flex-direction: column;
  }
}


button {
  background-color: white;
  border: none;
  margin: 5px;
  &:hover {
    background-color: rgb(114, 174, 254);
    color: white;
  }
}

.slide-fade-enter-active {
  transition: all 1.3s ease;
}
.slide-fade-leave-active {
  transition: all;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  // transform: translateX(40px);
  opacity: 0;
}

.contact {
  order: 2;
  @media(min-width: 700px) {
    order: 3;
  }
  a {
    color: white;
    text-decoration: none;
    transition: all 350ms;
    display: block;
    &:hover {
      color: grey;
      background-color: white;
    }
  }
}

.sections {
  margin: 10px;
}

</style>
