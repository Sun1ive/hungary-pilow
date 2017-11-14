<template>
  <div class="reviews">
    <div class="wrapper">
      <h2>Sugestii</h2>
      <p>Va multumim pentru orice sugestie, ne motivati sa ne facem treaba!</p>
    </div>
    <slider 
    animation="fade"
    :width="width"
    :speed="900"
    :interval="5000">
      <slider-item v-for="(item, i) in items" :key="i">
        <img :src="item" alt="review">
      </slider-item>
    </slider>

    <div class="arrow"></div>
    <div class="myButton" @click="showOrder">Comanda acum</div>

    <app-order @closeOrder="closeOrder" :active="active"></app-order>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';
import order from './modals/order';

export default {
  data() {
    return {
      items: [
        '/static/reviews/1.png',
        '/static/reviews/2.png',
        '/static/reviews/3.png',
        '/static/reviews/4.png',
      ],
      smallerItems: [
        '/static/reviews/441.png',
        '/static/reviews/442.png',
        '/static/reviews/443.png',
        '/static/reviews/444.png',
      ],
      active: false,
      width: '',
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
  mounted() {
    const WIDTH = window.innerWidth;
    this.width = WIDTH.toString();

    // if (WIDTH <= 480) {
    //   this.items = this.smallerItems;
    // } else if (WIDTH <= 350) {
    //   this.items = this.smallItems;
    // }
  },
};
</script>

<style scoped>
@import '../css/slider.css';

.reviews {
  background-image: url('../assets/44.jpg');
  background-position: center center;
  background-size: cover;
  min-height: 920px;
  color: #fff;
  position: relative;
  & .wrapper {
    text-align: center;
    margin-bottom: 2rem;
    & h2 {
      font-size: responsive 2rem 4rem;
      padding-top: 3rem;
    }
    & p {
      font-family: Arial, Helvetica, sans-serif;
      width: 40%;
      margin: 0 auto;
      padding-top: 1rem;
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

@media (max-width: 440px) {
  .reviews .wrapper p {
    width: 100%;
  }
  .reviews {
    min-height: 550px;
  }
  .reviews .arrow {
    bottom: 14%;
  }
}
</style>