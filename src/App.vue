<template>
  <div id="app">
   <app-toolbar></app-toolbar>
  </div>
</template>

<script>
import toolbar from '@/components/toolbar';

export default {
  components: {
    'app-toolbar': toolbar,
  },
};
</script>

<style>
#app {
  font-family: 'CharterC-Bold', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1280px;
  background-color: #f6f6f6;
}
</style>
