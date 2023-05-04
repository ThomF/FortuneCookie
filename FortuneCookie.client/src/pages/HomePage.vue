<template>
  <!-- <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">
      <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"
        class="rounded-circle">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        FORTUNE <i class="mdi mdi-cookie-outline"></i>
      </h1>
    </div>
  </div> -->
  <button @click="getOneFortune()" class="fc spawned" type="button">
    <div class="fc-part left"></div>
    <div class="fc-part right"></div>
    <div class="fc-crumbs">
      <div class="fc-crumb"></div>
      <div class="fc-crumb"></div>
      <div class="fc-crumb"></div>
      <div class="fc-crumb"></div>
      <div class="fc-crumb"></div>
      <div class="fc-crumb"></div>
      <div class="fc-crumb"></div>
      <div class="fc-crumb"></div>
    </div>
    <!-- <div class="fc-fortune">
      <p class="fc-fortune-text">No fortune</p>
      <p class="fc-lucky-numbers">Lucky Numbers <span>?, ?, ?, ?, ?, ?</span></p>
    </div> -->
  </button>
</template>

<script>
import { onMounted, computed } from 'vue';
import { logger } from '../utils/Logger';
import { fortuneService } from '../services/FortuneService.js'
import Pop from '../utils/Pop';


export default {
  setup() {
    async function getFortune() {
      try {
        await fortuneService.getFortune()
      } catch (error) {
        logger.error(error.message)
      }
    }


    onMounted(() => {
      getFortune()
    })
    return {
      async getOneFortune() {
        try {
          fortuneService.getOneFortune()
        } catch (error) {
          Pop.error(error.message)
        }
      }

    }
  }
}
</script>

<style scoped lang="scss">
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
button {
  font-size: 16px;
  line-height: 1.5;
}

body {
  background: #D00018;
}

button {
  cursor: pointer;
}

/* Cookie */
.fc {
  background: transparent;
  display: block;
  margin: 4.5em auto 0 auto;
  position: relative;
  width: 20em;
  height: 17em;
}

.fc:focus {
  outline: transparent;
}

.fc-part,
.fc-crumbs,
.fc-crumb,
.fc-fortune {
  position: absolute;
  top: 0;
}

.fc-part,
.fc-crumb {
  background: currentColor;
  color: #efaa5d;
}

.fc-part {
  width: 8em;
  height: 18em;
  z-index: 2;
}

.left {
  border-radius: 7em 1em 1em 7em / 50%;
  left: calc(50% - 5.4em);
  transform: rotate(15deg);
  transform-origin: 68% 0;
}

.right {
  border-radius: 1em 7em 7em 1em / 50%;
  right: calc(50% - 5.4em);
  transform: rotate(-20deg);
  transform-origin: 32% 0;
}

.fc-crumbs {
  left: calc(50% - 0.4em);
  width: 0.8em;
  height: 6em;
  z-index: 1;
}

.fc-crumb {
  border-radius: 50%;
  width: 0.5em;
  height: 0.5em;
}

.fc-crumb:nth-child(1) {
  top: 4%;
  left: 15%;
}

.fc-crumb:nth-child(2) {
  top: 20%;
  right: 15%;
}

.fc-crumb:nth-child(3) {
  top: 30%;
  left: 25%;
}

.fc-crumb:nth-child(4) {
  top: 45%;
  right: 25%;
}

.fc-crumb:nth-child(5) {
  top: 55%;
  left: 5%;
}

.fc-crumb:nth-child(6) {
  top: 65%;
  right: 5%;
}

.fc-crumb:nth-child(7) {
  top: 75%;
  left: 30%;
}

.fc-crumb:nth-child(8) {
  top: 90%;
  right: 35%;
}

/* Fortune */
.fc-fortune {
  background:
    linear-gradient(#fff0 .75em, #fff 0 5.25em, #fff0 0),
    linear-gradient(90deg, currentColor 3em, #fff 0 25.25em, currentColor 0);
  color: #00c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.75em 1.5em 0.75em 3.75em;
  text-align: center;
  width: 26em;
  height: 6em;
  left: 0;
  transform: scale(0, 1);
  transform-origin: 50% 32%;
}

.fc-fortune-text {
  font-family: serif;
}

.fc-lucky-numbers {
  font-family: sans-serif;
}

/* Animation States */
.spawned {
  animation: popIn 0.3s linear;
}

.opened {
  width: 26em;
  height: 6em;
}

.opened .left {
  animation: breakLeft 0.7s ease-in forwards;
}

.opened .right {
  animation: breakRight 0.7s ease-in forwards;
}

.opened .fc-crumbs {
  animation: fallOut 0.7s ease-in forwards;
}

.opened .fc-fortune {
  animation: foldOut 0.7s ease-in forwards;
}

/* Animations */
@keyframes popIn {
  from {
    transform: scale(0);
  }

  75% {
    transform: scale(1.1);
  }

  to {
    transform: scale(1);
  }
}

@keyframes breakLeft {
  from {
    transform: translateX(0) rotate(25deg);
  }

  30%,
  40% {
    transform: translateX(0) rotate(55deg);
  }

  70%,
  80% {
    opacity: 1;
    transform: translateX(-14em) rotate(50deg);
  }

  to {
    opacity: 0;
    transform: translateX(-14em) rotate(50deg);
  }
}

@keyframes breakRight {
  from {
    transform: translateX(0) rotate(-25deg);
  }

  30%,
  40% {
    transform: translateX(0) rotate(-55deg);
  }

  70%,
  80% {
    opacity: 1;
    transform: translateX(14em) rotate(-50deg);
  }

  to {
    opacity: 0;
    transform: translateX(14em) rotate(-50deg);
  }
}

@keyframes fallOut {
  from {
    left: calc(50% - 0.4em);
    width: 0.8em;
    transform: translateY(0);
  }

  30% {
    opacity: 1;
  }

  60%,
  to {
    opacity: 0;
    left: calc(50% - 3em);
    width: 6em;
    transform: translateY(24em);
  }
}

@keyframes foldOut {
  from {
    transform: scale(0.23, 0.7);
  }

  30%,
  40% {
    transform: scale(0.5, 0.7);
  }

  69% {
    transform: scale(1, 0.7);
  }

  74%,
  to {
    transform: scale(1, 1);
  }
}
</style>
