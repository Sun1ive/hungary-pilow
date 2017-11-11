<template>
  <div class="toolbar">
    <div class="wrapper">
      <img src="../assets/logo.png" alt="logo">
      <ul class="menu">
        <li><a href="mailto:example@example.com">example@example.com</a></li>
        <li><a href="tel:12321312">321312321</a></li>
        <li v-scroll-to="'.header'">Főoldal</li>
        <li v-scroll-to="'.why'">Előnyök</li>
        <li v-scroll-to="'.video'">Rólunk</li>
        <li v-scroll-to="'.reviews'">Vélemények</li>
      </ul>
      <div class="myButton" @click="showOrder">Rendeljen most</div>
    </div>

    <app-order @closeOrder="closeOrder" :active="active"></app-order>
  </div>
</template>

<script>
import order from '@/components/modals/order';

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
.toolbar {
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 25px;
  width: 100%;
  max-width: 1280px;
  z-index: 9;
}
.wrapper {
  display: flex;
  height: 60px;
  align-items: center;
  & img {
    height: 47px;
    width: 90px;
  }
}
.menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--mainBlue);
  font-family: Arial, Helvetica, sans-serif;
  & li {
    cursor: pointer;
    transition: .4s ease;
    &:hover {
      opacity: .5;
    }
  }
}

.fixed {
  position: fixed;
  top: 30px;
  width: 100%;
}
</style>