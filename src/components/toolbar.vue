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


<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item is-active has-dropdown">

  <button class="button is-active navbar-burger" data-target="navMenu">
    <span></span>
    <span></span>
    <span></span>
  </button>

    <div class="navbar-dropdown">
      <a class="navbar-item" href="mailto:example@example.com">example@example.com</a>
      <a class="navbar-item" href="tel:32432432">432432423</a>
      <a class="navbar-item" v-scroll-to="'.header'">Főoldal</a>
      <a class="navbar-item" v-scroll-to="'.why'">Előnyök</a>
      <a class="navbar-item" v-scroll-to="'.video'">Rólunk</a>
      <a class="navbar-item" v-scroll-to="'.reviews'">Vélemények</a>
    </div>
  </div>
</nav>

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
  left: 0;
  width: 100%;
  z-index: 9;
}
.wrapper {
  display: flex;
  min-height: 60px;
  align-items: center;
  & img {
    height: 47px;
    width: 90px;
  }
}
.menu {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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

.navbar-burger {
  margin: 0;
}

.fixed {
  position: fixed;
  top: 30px;
  width: 100%;
}


@media (max-width: 440px) {
  .toolbar {
    & .wrapper {
      display: none;
    }
  }
}
</style>