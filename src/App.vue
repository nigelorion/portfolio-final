<template>
  <div id="app">
    <div class="title sections">
      <button v-on:click="aboutToggle()" type="button" name="button">about</button>
      <button v-on:click="portfolioToggle()" type="button" name="button">portfolio</button>
      <h1>nigel orion</h1>
      <p>engineer</p>
      <p>st petersburg, fl</p>
    </div>
    <div class="center sections">
      <transition name="slide-fade" mode="out-in">
        <Portfolio v-on:portfolioLink="portfolioToggle()" v-if="portfolioState"/>
        <About v-if="aboutState"/>
      </transition>
    </div>
    <div class="contact sections">
      <a target="_blank" href="https://github.com/nigelorion">github</a>
      <a target="_blank" href="https://www.linkedin.com/in/nigelorion/">linkedin</a>
      <a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vQuuuf72PWus1M4b8yJmThf7NNjK9cuXr2ECNiJUkxB4CWzNpF5cO2n1e20_JDvN-p9JJiEGyKlPeEC/pub">resume</a>
    </div>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue'
import About from './components/About.vue'
export default {
  name: 'app',
  components: {
    Portfolio,
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
  background-color: rgb(0, 0, 0);
}

* {
  box-sizing: border-box;
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
  @media(max-width: 900px) {
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 1.2em;
  }
  @media(max-width: 900px) {
    justify-content: flex-start;
    flex-direction: column;
  }
}
button {
  background-color: rgba(37, 60, 187, 0);
  color: inherit;
  font-size: 1.3em;
  margin: 0 0 10px 10px;
  border: solid white 1px;
  transition: all 400ms;
  &:hover {
    background-color: white;
    color: black;
  }
  &:focus {
    outline: none;
  }
  @media(max-width: 700px) {
    font-size: 1.7em;
  }
}
.contact {
  border-top: solid 1px grey;
  border-left: solid 1px grey;
  padding: 5px;
  order: 3;
  margin: 10px;
  min-width: 200px;
  min-height: 150px;
  @media(max-width: 900px) {
    width: 100%;
    order: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-left: none;
    border-bottom: solid 1px grey;
  }
  a {
    color: inherit;
    text-decoration: none;
    transition: all 400ms;
    display: block;
    padding: 3px;
    @media(max-width: 900px) {
      border: solid white 1px;
      margin: 3px;
    }
    &:hover {
      color: black;
      background-color: white;
    }
  }
}

.sections {
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
  height: 150px;
  margin: 10px;
  @media (max-width: 900px) {
    width: 100%;
    font-size: .7em;
    padding: 25px 25px 0 0;
    border: none;
  }
}
.center {
  max-width: 600px;
  @media(max-width: 900px) {
    width: 100%;
    order: 3;
  }
}

//// section transitions
.slide-fade-enter-active {
  transition: all 1.3s ease;
}
.slide-fade-leave-active {
  transition: all;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}

</style>
