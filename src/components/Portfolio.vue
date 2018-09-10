<template>
  <div class="main">
    <div class="projects">
      <div class="projectWrapper hbailey">
        <div class="show">
          <p>hbailey</p>
          <p>vuejs</p>
        </div>
        <div>
          <p class="aboutProject">A custom built project for a Seattle based mens resale clothing boutique. </p>
        </div>
        <div class="hidden">
          <a target="_blank" href="https://github.com/nigelorion/hbailey">code</a>
          <a target="_blank" href="http://hbailey.boutique">live</a>
        </div>

      </div>
      <div class="projectWrapper">
        <div class="show">
          <p>spotifyapi</p>
          <p>reactjs</p>
        </div>
        <div class="hidden">
          <a target="_blank" href="https://github.com/nigelorion/hbailey">code</a>
          <a target="_blank" href="http://hbailey.boutique">live</a>
        </div>
      </div>
      <div class="projectWrapper">
        <div class="show">
          <p>starwarsapi</p>
          <p>vuejs</p>
        </div>
        <div class="hidden">
          <a target="_blank" href="https://github.com/nigelorion/hbailey">code</a>
          <a target="_blank" href="http://hbailey.boutique">live</a>
        </div>
      </div>
      <div class="projectWrapper">
        <div class="show">
          <p>movie-list</p>
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

<style scoped lang="scss">

.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.projects {
  display: flex;

  flex-wrap: wrap;
  max-width: 500px;
  @media(max-width:700px) {
    width: 100%;
  }
  justify-content: center;
  .projectWrapper {
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: solid 1px white;
    color: lightblue;
    margin: 1%;
    justify-content: space-between;
    padding: 10px;
    text-align: center;
    @media(max-width:700px) {
      width: 100%;
      height: 200px;
      flex-direction: row;
    }
    .hidden {
      opacity: 0;
      transition: 500ms;
      border-left: solid 1px white;
      border-top: solid 1px white;
      padding: 3px;
      &:hover {
      }
      @media(max-width: 700px) {
        opacity: 1;
        border: none;
      }
    }
    a {
      color: white;
      text-decoration: none;
      transition: all 400ms;
      &:hover {
        color: grey;
        background-color: white;
      }
      @media(max-width: 700px) {
        opacity: 1;
        border: solid white 1px;
        margin: 3px;
        padding: 3px;
      }
    }
    &:hover {
      background: linear-gradient(313deg, #7fe7f6, #d27778);
      border: none;
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
  border-bottom: solid white 1px;
  padding: 5px;
  @media(max-width: 700px) {
    border-bottom: none;
    border-right: solid white 1px;
  }
}
</style>
