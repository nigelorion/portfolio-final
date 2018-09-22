<template>
  <div class="main">
    <div class="aboutBox">
      <div class="colorBoxes">
        <div class="colorLeft">
          <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/39441805_938462563031063_1209652005337825280_n.jpg?_nc_cat=0&oh=0692cb21412ffbce180462b75750ea5e&oe=5C018CED" alt="Photo of Nigel and is dog, Hudson">
        </div>
        <div class="colorRight">
          <ul class="list">
            <li>builder</li>
            <li>innovator</li>
            <li>creator</li>
            <li>teacher</li>
          </ul>
        </div>
      </div>
      <div class="aboutText">
        <p>Nigel Orion is a freelancer living and working in the PNW. He is primarily a coder and web developer with a side hustle in buying and selling. His love for digging into all things mechanical lends well to his passion for programming. Nigel’s work is well tailored and bespoke, always high quality, with an edge of irony and fun.</p>
        <p>Proficent with: HTML, CSS, SCSS, Javascript, VueJS, ReactJS, Angular2, Git, Linux</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

img {
  filter: grayscale(100%);
  object-fit: cover;
  opacity: .8;
  width: 100%;
  height: 100%;
}
.colorLeft {
  background: linear-gradient(313deg, #a6bd5a, #24b1b6);
  background-size: 400% 400%;
  border: none;
  -webkit-animation: AnimationName 4s ease infinite;
  -moz-animation: AnimationName 4s ease infinite;
  animation: AnimationName 4s ease infinite;
}
.colorRight {
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 1.7em;
}

.colorBoxes {
  display: flex;
  width: 100%;
}

.aboutBox {
  width: 500px;
  border: solid 1px white;
  @media(max-width: 900px) {
    border: none;
    width: 100%;
  }
}

.aboutText {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  p {
    margin: 10px;
    padding: 10px;
  }
}

.colorLeft, .colorRight {
  flex: 1;
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
