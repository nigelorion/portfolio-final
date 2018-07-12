<template>
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <div id="app">
    <div class="title sections">
      <button v-on:click="aboutToggle()" type="button" name="button">about</button>
      <button v-on:click="portfolioToggle()" type="button" name="button">portfolio</button>
      <h1>nigel orion</h1>
      <p>web developer</p>
      <p>pdx</p>
    </div>
    <div class="center sections">
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
  background-color: rgb(33, 33, 33);
}


* {
  box-sizing: border-box;
  transition: all 400ms;
}

#app {
  font-family:'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5%;
  @media(max-width: 700px) {
    flex-direction: column;
    height: auto;
    justify-content: flex-start;
  }
}


button {
  background-color: rgba(37, 60, 187, 0);
  color: inherit;
  font-size: 1.1em;
  margin: 0 0 10px 10px;
  border: none;
  &:hover {
    background-color: white;
    color: grey;
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
  // transform: translate  // transform: translateX(40px);X(40px);
  opacity: 0;
}

.contact {
  border-top: solid 1px grey;
  border-left: solid 1px grey;
  padding: 5px;
  order: 3;
  margin: 10px;
  min-width: 200px;
  min-height: 150px;


  @media(min-width: 700px) {
    order: 2;
  }
  a {
    color: inherit;
    width: 80px;
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

  // flex-grow: 1;
  // flex-basis: 1;
  // flex: 1;
  p, h1 {
    margin: 0;
    padding: 0;
  }
}

.title {
  text-align: right;
  border-top: solid 1px grey;
  border-right: solid 1px grey;
  padding: 5px;
  min-width: 200px;
  min-height: 150px;
  margin: 10px;
  // @media (min-width: 700px) {
  //   width: 100%;
  // }
}

.center {
  max-width: 600px;
}

</style>
