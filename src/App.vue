<template>
  <div id="app">
   <app-toolbar></app-toolbar>
   <app-header></app-header>
   <app-main></app-main>
   <app-footer></app-footer>
  </div>
</template>

<script>
import toolbar from '@/components/toolbar';
import header from '@/components/header';
import main from '@/components/main';
import footer from '@/components/footer';
import AOS from 'aos';

export default {
  components: {
    'app-toolbar': toolbar,
    'app-header': header,
    'app-main': main,
    'app-footer': footer,
  },
  mounted() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      disable: 'mobile',
      // once: true,
    });
  },
};
</script>

<style>
html {
  background-image: url('./assets/back.png');
  background-repeat: repeat;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1280px;
  margin: 0 auto;
  background-color: #f6f6f6;
}
</style>
