<template>
  <div class="main">
    <div v-if="overlayState" class="aboutOverlay">

      <p>Nigel Orion is a freelancer living and working in the PNW. He is primarily a coder and web developer with a side hustle in buying and selling. His love for digging into all things mechanical lends well to his passion for programming. Nigel’s <button v-on:click="$emit('portfolioLink')">work</button> is well tailored and bespoke, always high quality, with an edge of irony and fun.</p>
      <p>Proficent with: HTML, CSS, SCSS, Javascript, VueJS, ReactJS, Angular2, Git, Linux</p>

    </div>
    <div v-if="!overlayState" class="projects">

      <div class="projectWrapper one">
        <button class="bioBtn" v-on:click="overlayState = !overlayState">bio</button>
      </div>
      <div class="projectWrapper two">

        <img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/31408230_844735999070387_1217057061532073984_n.jpg?_nc_cat=0&oh=5684caf35c9f5b94ec138773908dbb58&oe=5BB6414C" alt="">

      </div>
      <div class="projectWrapper three">
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p> -->
        <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/39441805_938462563031063_1209652005337825280_n.jpg?_nc_cat=0&oh=0692cb21412ffbce180462b75750ea5e&oe=5C018CED" alt="">

      </div>
      <div class="projectWrapper four">
        <ul class="list">
          <li>builder</li>
          <li>innovator</li>
          <li>creator</li>
          <li>teacher</li>
        </ul>
        <!-- <img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/20431648_714174912126497_4421888905523721486_n.jpg?_nc_cat=0&oh=afe48f53fae9cc0332eb2231bfa2333a&oe=5BEC9B1A" alt=""> -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      overlayState: false

    }
  },
  methods: {
    emitter() {
      this.$emit('portfolioLink')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
 .projects {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   max-width: 500px;
   position: relative;
    .projectWrapper {
     position: relative;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     min-width: 200px;
     min-height: 200px;
     margin: 1%;
     transition: all 400ms;
     @media(max-width:450px) {
       min-width: 150px;
       min-height: 150px;
     }
     a {
       opacity: 0;
       transition: 500ms;
       color: white;
       text-decoration: none;
       &:hover {
         color: grey;
         margin-right: 10px;
       }
     }
     &:hover {
       background: linear-gradient(313deg, #a6bd5a, #6d24b6);
       background-size: 400% 400%;
       border: none;
       -webkit-animation: AnimationName 4s ease infinite;
       -moz-animation: AnimationName 4s ease infinite;
       animation: AnimationName 4s ease infinite;
      }
     &:hover > a {
       opacity: 1;
     }
     p {
       font-size: 1.2em;
     }
   }
 }
img {
  height: 200px;
  width: 200px;

  filter: grayscale(100%);
  object-fit: cover;
  opacity: .8;
}
.one, .three {
  background: linear-gradient(313deg, #a6bd5a, #24b1b6);
  background-size: 400% 400%;
  border: none;
  -webkit-animation: AnimationName 4s ease infinite;
  -moz-animation: AnimationName 4s ease infinite;
  animation: AnimationName 4s ease infinite;
}
.four, .two {
    background: linear-gradient(113deg, #e3ebca, #508caf);
  background-size: 400% 400%;
  border: none;
  -webkit-animation: AnimationName 4s ease infinite;
  -moz-animation: AnimationName 4s ease infinite;
  animation: AnimationName 4s ease infinite;
}
.list {
  list-style: none;
  padding: 0;
}
.bioBtn {
  font-size: 2em;
  padding: 5px;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
}
.aboutOverlay {
  width: 500px;
  padding: 5%;
  border: solid white 1px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: black;
  @media(max-width: 1000px) {
    border: none;
    width: 100%;
  }
  p {
    background-color: rgba(255, 255, 255, 0.8);
    margin: 10px;
    padding: 10px;
  }
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 38%}
    50%{background-position:100% 63%}
    100%{background-position:0% 38%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 38%}
    50%{background-position:100% 63%}
    100%{background-position:0% 38%}
}
@keyframes AnimationName {
    0%{background-position:0% 38%}
    50%{background-position:100% 63%}
    100%{background-position:0% 38%}
}
</style>
