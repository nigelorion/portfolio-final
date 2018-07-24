<template>
  <div class="main">
    <div class="projects">
      <div class="projectWrapper hbailey">
        <div class="show">
          <p>hbailey</p>
          <p>vuejs</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .main {

 }

 .projects {
   display: flex;

   flex-wrap: wrap;
   @media(max-width:700px) {
     width: 100%;
     height: 100vh;
   }
   justify-content: center;
   // transform: rotate(45deg);
   // @media(max-width: 700px) {
   //   transform: rotate(0deg);
   // }

    .projectWrapper {
     // min-width: 200px;
     // min-height: 200px;
     height: 250px;
     width: 250px;
     display: flex;
     justify-content: space-around;
     align-items: center;
    //  flex-direction: column;
     // background-color: rgb(105, 117, 133);
     border: solid 1px white;
     margin: 1%;
     color: lightblue;
     @media(max-width:700px) {
       width: 100%;
       height: 200px;
       margin: 5px;
       flex-direction: row;
       justify-content: space-around;
     }
     .hidden {
       opacity: 0;
       transition: 500ms;
       border-left: solid 1px white;
       border-top: solid 1px white;
       padding: 3px;
       &:hover {
         padding: 10px;
       }
     }
     a {
       color: white;
       text-decoration: none;
       &:hover {
         color: grey;
         background-color: white;
       }
       @media(max-width: 700px) {
         opacity: 1;
       }
     }
     &:hover {
       // transform: rotate(-45deg);
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
   }
 }
//

.hidden, .show {
  display: flex;
  flex-direction: column;

}
// .hbailey {
//   background-image: url(../assets/hbaileyimage.png);
//   background-position: center;
// }
</style>
