<template>
  <div class="heal">
    <div class="wrapper">
      <h2>Elég az álmatlan éjszakákból! Gyógyítsa meg párnáját!</h2>
      <div class="columns">
        <div class="column">A személyzet szakértelme és kiegészítő szolgáltatások.</div>
        <div class="column">A futárok pontossága a párnak összegyűjtésében és kézbesítésében.</div>
        <div class="column">Szennyeződésks, por, illetve a mikroorganizmusok eltávolítása.</div>
      </div>
    </div>
    <img class="rightPilow" src="../assets/p5.png" alt="pillow">
    <img class="leftPilow" src="../assets/p6.png" alt="pillow">

    <div class="arrow"></div>
    <div class="myButton" @click="showOrder">Rendeljen most</div>

    <app-order @closeOrder="closeOrder" :active="active"></app-order>
  </div>
</template>

<script>
import order from './modals/order';

export default {
  components: {
    'app-order': order,
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    showOrder() {
      this.active = true;
    },
    closeOrder() {
      this.active = false;
    },
  },
};
</script>

<style scoped>
.heal {
  background-image: radial-gradient(circle at 31% 18%, #2894e6, #1c84d3 62%, #157bc8);
  background-image: url('../assets/3.jpg');
  background-position-x: 40%;
  background-color: var(--mainBlue);
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.09);
  min-height: 560px;
  position: relative;
  & img {
    position: absolute;
  }
  & .rightPilow {
    width: 240px;
    right: 2%;
    top: 0%;
  }
  & .leftPilow {
    left: 0%;
    top: 12%;
    width: 261px;
  }
  & .myButton {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .arrow {
    bottom: 20%;
    left: 50%;
  }
}
.wrapper {
  color: #fff;
  & h2 {
    font-size: responsive 1.5rem 4rem;
    text-align: center;
    padding-top: 3rem;
    max-width: 850px;
    margin: 0 auto;
  }
  & .columns {
    margin-top: 4rem;
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
  }
}

.column {
  font-size: responsive .9rem 1rem;
  position: relative;
  z-index: 2;
}


@media (max-width: 1000px) {
  .heal {
    min-height: 475px;
  }
}


@media (max-width: 700px) {
  .heal .leftPilow,
  .heal .rightPilow {
    display: none;
  }
  .column {
    width: 85%;
    margin: 0 auto;
    padding: 1rem 0;
  }
  .wrapper .columns {
    width: 100%;
    margin: 2rem auto;
  }
}

@media (max-width: 400px) {
  .heal .myButton {
    bottom: 0;
  }
  .heal .arrow {
    bottom: 10%;
  }
}
</style>