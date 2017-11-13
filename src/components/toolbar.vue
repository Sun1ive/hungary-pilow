<template>
  <div class="toolbar">
    <div class="wrapper">
      <img class="logo" src="../assets/logo.png" alt="logo">
      <ul class="menu">
        <li><a href="mailto:example@example.com">example@example.com</a></li>
        <li><a href="tel:‎06307088781">‎06 30 708 8781</a></li>
        <li v-scroll-to="'.header'">Főoldal</li>
        <li v-scroll-to="'.why'">Előnyök</li>
        <li v-scroll-to="'.video'">Rólunk</li>
        <li v-scroll-to="'.reviews'">Vélemények</li>
      </ul>
      <div class="myButton" @click="showOrder">Rendeljen most</div>
    </div>

<button class="button navbar-burger" @click="showMenu">
  <span></span>
  <span></span>
  <span></span>
</button>


<nav class="navbar" id="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown is-active">
    <div class="navbar-dropdown">
      <a class="navbar-item" href="mailto:example@example.com">example@example.com</a>
      <a class="navbar-item" href="tel:‎06307088781">‎06 30 708 8781</a>
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
    showMenu() {
      const button = document.querySelector('.navbar-burger');
      const menu = document.querySelector('#navbar');
      if (!button.classList.contains('is-active')) {
        button.classList.add('is-active');
        menu.style.display = 'block';
      } else {
        button.classList.remove('is-active');
        menu.style.display = 'none';
      }
    },
  },
};
</script>

<style scoped>
#navbar {
  display: none;
}
.navbar-item {
  color: var(--logo);
}
.menu li{
  color: var(--logo);
}

.toolbar {
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 25px;
  left: 0;
  width: 100%;
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
    font-size: responsive 0.8rem 1rem;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      opacity: 0.5;
    }
  }
}

.navbar-burger {
  margin: 0;
  display: none;
}

.fixed {
  position: fixed;
  top: 30px;
  width: 100%;
}

@media (max-width: 800px) {
  .myButton {
    display: none;
  }
  .logo {
    display: none;
  }
}

@media (max-width: 440px) {
  .toolbar {
    & .wrapper {
      display: none;
    }
  }
  .navbar-burger {
    display: block;
  }
}
</style>