<template>
  <div class="main">
    <div class="projects">
      <div class="projectWrapper hbailey">
        <div class="show">
          <a class="projectName" target="_blank" href="http://hbailey.boutique">H.Bailey</a>
          <p>VueJS</p>
        </div>
        <div>
          <p class="aboutProject">A custom built project for a Seattle based mens resale clothing boutique. </p>
        </div>
        <div class="hidden">
          <a class="hiddenLinks" target="_blank" href="https://github.com/nigelorion/hbailey">code</a>
          <a class="hiddenLinks" target="_blank" href="http://hbailey.boutique">live</a>
        </div>

      </div>
      <div class="projectWrapper">
        <div class="show">
          <a class="projectName" target="_blank" href="https://current-aqi.herokuapp.com">AQI App</a>
          <p>ReactJS</p>
        </div>
        <div>
          <p class="aboutProject">A simple widget utilizing multiple APIs to display air quality and weather data</p>
        </div>
        <div class="hidden">
          <a class="hiddenLinks" target="_blank" href="https://github.com/nigelorion/air-quality-app">code</a>
          <a class="hiddenLinks" target="_blank" href="https://current-aqi.herokuapp.com">live</a>
        </div>
      </div>
      <div class="projectWrapper">
        <div class="show">
          <p class="projectName">starwarsapi</p>
          <p>vuejs</p>
        </div>
        <div class="hidden">
          <a target="_blank" href="https://github.com/nigelorion/hbailey">code</a>
          <a target="_blank" href="http://hbailey.boutique">live</a>
        </div>
      </div>
      <div class="projectWrapper">
        <div class="show">
          <p class="projectName">movie-list</p>
          <p>reactjs</p>
        </div>
        <div class="hidden">
          <a target="_blank" href="https://github.com/nigelorion/hbailey">code</a>
          <a target="_blank" href="http://hbailey.boutique">live</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Center'
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: 500px;
  @media(max-width:900px) {
    width: 100%;
  }
  .projectWrapper {
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: solid 1px white;
    color: white;
    margin: 3%;
    justify-content: space-between;
    padding: 10px;
    text-align: center;
    @media(min-width:900px) {
      width: 240px;
      height: 240px;
      margin: 1%;
    }
    .hidden {
      transition: 500ms;
      padding: 3px;
      display: inline-block;
      @media(min-width: 900px){
        opacity: 0;
      }
    }
    .hiddenLinks {
      color: white;
      text-decoration: none;
      transition: all 400ms;
      opacity: 1;
      border: solid white 1px;
      margin: 5px;
      padding: 3px;
      &:hover {
        color: grey;
        background-color: white;
      }
    }
    &:hover {
      background: linear-gradient(313deg, #7fe7f6, #d27778);
      background-size: 400% 400%;
      -webkit-animation: AnimationName 4s ease infinite;
      -moz-animation: AnimationName 4s ease infinite;
      animation: AnimationName 4s ease infinite;
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
    }
    &:hover > .hidden {
      opacity: 1;
    }
    &:hover > .aboutProject {
      opacity: 0;
    }
  }
}
.hidden, .show {
  display: flex;
  flex-direction: column;
}
img {
  height: 100%;
}
.aboutProject {
  font-size: .8em;
  margin: 5px;
}
.show {
  padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}

.projectName {
  color: white;

}
</style>
