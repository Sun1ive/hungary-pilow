<template>
  <main>
    <app-why></app-why>
    <app-howitswork></app-howitswork>
    <app-heal></app-heal>
    <app-reviews></app-reviews>
  </main>
</template>




<script>
import why from './why';
import howitswork from './howitswork';
import heal from './heal';
import reviews from './reviews';

export default {
  components: {
    'app-why': why,
    'app-howitswork': howitswork,
    'app-heal': heal,
    'app-reviews': reviews,
  },
};
</script>



<style scoped>

</style>