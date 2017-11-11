<template>
  <div class="reviews">
    <div class="wrapper">
      <h2>Vélemények</h2>
      <p>Köszönjük javaslatáért, jó munkavégzésre ösztönöznek bennünket!</p>
    </div>
    <slider 
    animation="normal"
    width="900px">
      <slider-item v-for="(item, i) in items" :key="i">
        <div>{{ item }}</div>
      </slider-item>
    </slider>

    <div class="arrow"></div>
    <div class="myButton" @click="showOrder">Rendeljen most</div>

    <app-order @closeOrder="closeOrder" :active="active"></app-order>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';
import order from './modals/order';

export default {
  data() {
    return {
      items: ['hello world', 'hello there', 'thanks'],
      active: false,
    };
  },
  components: {
    Slider,
    SliderItem,
    'app-order': order,
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
@import '../css/slider.css';

.reviews {
  background-image: url('../assets/44.jpg');
  background-position: center center;
  min-height: 600px;
  color: #fff;
  position: relative;
  & .wrapper {
    text-align: center;
    & h2 {
      font-size: responsive 2rem 4rem;
      padding-top: 3rem;
    }
    & p {
      font-family: CharterC, Arial, Helvetica, sans-serif;
      width: 40%;
      margin: 0 auto;
    }
  }
  & .myButton {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  & .arrow {
    bottom: 10%;
    left: 50%;
  }
}
</style>