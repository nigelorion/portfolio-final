<template>
  <div class="main">
    <div class="aboutBox">
      <div class="colorBoxes">
        <div class="colorLeft">
          <img src="https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/41382349_957106404500012_6675097343760531456_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=-7GJJZh9AQ0AX_aDo4o&_nc_ht=scontent.ftpa1-2.fna&oh=2c4aeae64ea53d3f63cec824af919da7&oe=5FEAE6E9" alt="Photo of Nigel and is dog, Hudson">
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
        <p>A technical creative problem solver with a unique perspective to bring ideas and solutions with an empathetic approach. As a teacher and mentor, communicating effectively complex ideas as a simple solution is a passion, finding enjoyment in creating and improving processes, while educating at a high and low-level capacity. I love the ‘ah ha’ moments. If I can get someone non-technical to understand the technical, my work is done. I’m looking for a career that allows me to take my technical knowledge and apply it in a creative, consultative environment.</p>
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
