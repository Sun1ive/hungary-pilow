<template>
  <nav class="toolbar">
    <div class="wrapper">
      <img class="logo" src="../assets/logo.png" alt="logo">
      <ul class="menu">
        <li><a href="mailto:dispeceratperne@gmail.com">dispeceratperne@gmail.com</a></li>
        <li><a href="tel:0740262222">074026 22 22</a></li>
        <li v-scroll-to="'.header'">Acasa</li>
        <li v-scroll-to="'.why'">Avantaje</li>
        <li v-scroll-to="'.video'">Despre noi</li>
        <li v-scroll-to="'.reviews'">Opinii</li>
      </ul>
      <div class="myButton" @click="showOrder">Comanda acum</div>
    </div>

<img class="logo_low" src="../assets/logo.png" alt="logo">
<div class="myButton isVisible" @click="showOrder">Comanda acum</div>

<button class="button navbar-burger" @click="showMenu">
  <span></span>
  <span></span>
  <span></span>
</button>


<nav class="navbar" id="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown is-active">
    <div class="navbar-dropdown">
      <a class="navbar-item" href="mailto:dispeceratperne@gmail.com">dispeceratperne@gmail.com</a>
      <a class="navbar-item" href="tel:0740262222">074026 22 22</a>
      <a class="navbar-item" v-scroll-to="'.header'">Acasa</a>
      <a class="navbar-item" v-scroll-to="'.why'">Avantaje</a>
      <a class="navbar-item" v-scroll-to="'.video'">Despre noi</a>
      <a class="navbar-item" v-scroll-to="'.reviews'">Opinii</a>
    </div>
  </div>
</nav>

    <app-order @closeOrder="closeOrder" :active="active"></app-order>
  </nav>
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
    font-size: responsive 0.7rem 1rem;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      opacity: 0.5;
    }
  }
}
.logo_low {
  display: none;
}

.navbar-burger {
  margin: 0;
  display: none;
}

.isVisible {
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
  .logo_low {
    display: block;
    position: absolute;
    width: 100px;
    height: 50px;
    right: 0%;
  }
  .isVisible {
    display: block;
    position: absolute;
    top: 25%;
    left: 31%;
    min-width: 125px;
    font-size: 0.8rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .navbar-burger {
    display: block;
  }
}

@media (max-width: 330px) {
  .isVisible {
    left: 25%;
  }
}
</style>