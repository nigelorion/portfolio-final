<template>
  <div class="main">
    <div class="projects">
      <div class="projectWrapper one">
        <h1>who am i</h1>
        <!-- <div class="arrowWrapper">
          <p class="arrows right">></p>
          <p class="arrows diagonal">></p>
          <p class="arrows down">></p>
        </div> -->

        <!-- <img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/20526181_714174562126532_5893054409823984934_n.jpg?_nc_cat=0&oh=1f33f0d15d359de676fbd1e42201017f&oe=5BE73882" alt=""> -->

      </div>
      <div class="projectWrapper two">
        <ul class="list">
          <li>builder</li>
          <li>inovator</li>
          <li>creator</li>
          <li>teacher</li>
        </ul>
        <img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/31408230_844735999070387_1217057061532073984_n.jpg?_nc_cat=0&oh=5684caf35c9f5b94ec138773908dbb58&oe=5BB6414C" alt="">

      </div>
      <div class="projectWrapper three">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
        <img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11905752_963926466764_6769395531660920993_n.jpg?_nc_cat=0&oh=6b5985a34313181f697ff68d40a3d15b&oe=5BB7FCBB" alt="">

      </div>
      <div class="projectWrapper four">
        <p>boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
        <img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/20431648_714174912126497_4421888905523721486_n.jpg?_nc_cat=0&oh=afe48f53fae9cc0332eb2231bfa2333a&oe=5BEC9B1A" alt="">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


 .projects {
   display: flex;
   justify-content: center;
   // width: 400px;
   // height: 400px;
   flex-wrap: wrap;
   max-width: 500px;
   max-height: 500px;
   // transform: rotate(45deg);
   // @media(max-width: 700px) {
   //   transform: rotate(0deg);
   //   width: 100%;
   // }

    .projectWrapper {
     // min-width: 200px;
     // min-height: 200px;
     position: relative;
     height: 200px;
     width: 200px;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     // background-color: rgb(105, 117, 133);
     // border: solid 1px white;
     margin: 1%;
     @media(max-width: 700px) {
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
       // transform: rotate(-45deg);
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
   }
 }

img {
  position: absolute;
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  opacity: .9;
  &:hover {
    opacity: 0;
  }
}

.one {
  // transform: rotate(-45deg);
  background: linear-gradient(313deg, #a6bd5a, #6d24b6);
  background-size: 400% 400%;
  border: none;

  -webkit-animation: AnimationName 4s ease infinite;
  -moz-animation: AnimationName 4s ease infinite;
  animation: AnimationName 4s ease infinite;
}

.list {
  list-style: none;
}

// .arrowWrapper {
//   position: absolute;
//   bottom: 20px;
//   right: 20px;
//   width: 20px;
//   height: 20px;
// }
//
// .arrows {
//   padding: 0;
//   margin: 0;
//   // .down {
//   //   transform: rotate(10deg);
//   // }
// }
//
// .down {
//   transform: rotate(90deg);
// }
//
// .diagonal {
//   transform: rotate(45deg);
// }

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
