<template>
  <div id="app">
   <app-toolbar></app-toolbar>
   <app-header></app-header>
  </div>
</template>

<script>
import toolbar from '@/components/toolbar';
import header from '@/components/header';

export default {
  components: {
    'app-toolbar': toolbar,
    'app-header': header,
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
