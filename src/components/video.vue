<template>
  <div class="video">
    <div class="wrapper">
      <h3>Nézze meg a következő tájekoztató videót szolgáltatásunkról</h3>
      <!-- <iframe width="620" height="345" src="https://www.youtube-nocookie.com/embed/bag-O-KrswA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe> -->
      <div class="myButton" @click="showOrder">Rendeljen most</div>
    </div>

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
.video {
  background-image: url('../assets/22.jpg');
  min-height: 600px;
  position: relative;
}
.video .wrapper h3 {
  font-size: responsive 1.2rem 2rem;
  color: var(--mainBlue);
  padding: 5rem 0 2rem 0;
  text-align: center;
  font-family: Helvetica, Arial, serif;
}
.myButton {
  position: absolute;
  bottom: 5%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>