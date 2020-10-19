<template>
  <div id="app">
    <transition name="fade">
      <div id="overlay" v-if="loaded == false">
        <div class="sk-folding-cube">
          <div class="sk-cube1 sk-cube"></div>
          <div class="sk-cube2 sk-cube"></div>
          <div class="sk-cube4 sk-cube"></div>
          <div class="sk-cube3 sk-cube"></div>
        </div>
      </div>
    </transition>
      <Navsidebar :method="NavToggle"/>
      <div id="view" :class="[ ActiveWidth ? 'viewToggle' : '']">
        <MediaPlayer></MediaPlayer>
        <router-view></router-view>
      </div>      
  </div>
</template>
<script>
import Navsidebar from './components/utels/Navsidebar/Navsidebar.vue';
import MediaPlayer from './components/utels/MediaPlayer/MediaPlayer.vue';
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      ActiveWidth: false,
      loaded: false
    }
  },
  components:{
    Navsidebar, MediaPlayer
  },
  methods: {
    NavToggle(valueFromChild) {
      this.ActiveWidth =  valueFromChild;
    },
    hide() {
      var localthis = this;
      setTimeout(function(){ localthis.loaded = true; }, 1000)
    }
  },
  created () {
    window.addEventListener('load', this.hide());
  },
}

</script>
<style>
  button:focus, .btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}
  body {
    background: #EEEEFA;
    color: #665560;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
  }

  .app {
    display: flex;
    width: 100%;
  }

  #view {
    height: 100vh;
    margin-left: 260px;
    position:relative;
    transition: all 0.3s;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
  }
  .viewToggle {
    margin-left: 55px !important;
  }

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #95919F; 
  border-radius: 25px;
  margin: 0px 3px 0px 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

  @media (max-width: 768px) {
    #view {
        margin-left: 55px;
    }
}

#overlay {
  position: fixed; 
  display: block;
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  z-index:10000;
  right: 0;
  bottom: 0;
  transition: 1s all ease;
  background-color: var(--white);
}

.sk-folding-cube {
  margin: 0 auto;
  width: 40px;
  z-index: 10000;
  height: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1); 
}
.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
          animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
          transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
          transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
          transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s; 
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  } 
}

@keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
