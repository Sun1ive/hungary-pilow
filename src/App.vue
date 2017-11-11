<template>
  <div id="app">
   <app-toolbar></app-toolbar>
   <app-header></app-header>
   <app-main></app-main>
  </div>
</template>

<script>
import toolbar from '@/components/toolbar';
import header from '@/components/header';
import main from '@/components/main';

export default {
  components: {
    'app-toolbar': toolbar,
    'app-header': header,
    'app-main': main,
  },
};
</script>

<style>
#app {
  font-family: 'CharterC-Bold', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1280px;
  margin: 0 auto;
  background-color: #c0c0c0;
}
</style>
