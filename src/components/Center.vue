<template>
  <div class="main">
    <div class="projects">
      <div class="projectWrapper">
        <p>hbailey</p>
        <a href="#">code</a>
        <a href="#">live</a>

      </div>
      <div class="projectWrapper">
        <p>hunt</p>
        <a href="#">code</a>
        <a href="#">live</a>

      </div>
      <div class="projectWrapper">
        <p>starwarsapi</p>
        <a href="#">code</a>
        <a href="#">live</a>

      </div>
      <div class="projectWrapper">
        <p>flipperapp</p>
        <a href="#">code</a>
        <a href="#">live</a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Center',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .main {

 }

 .projects {
   display: flex;
   // width: 400px;
   // height: 400px;
   flex-wrap: wrap;
   max-width: 500px;
   max-height: 500px;
   transform: rotate(45deg);

    .projectWrapper {
     // min-width: 200px;
     // min-height: 200px;
     height: 200px;
     width: 200px;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     // background-color: rgb(105, 117, 133);
     margin: 1%;
     p {
        color: grey;
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
       transform: rotate(-45deg);
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
     &:hover > a {
       opacity: 1;
     }
   }
 }

</style>
