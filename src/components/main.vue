<template>
  <main>
    <app-why></app-why>
    <app-howitswork></app-howitswork>
    <app-heal></app-heal>
  </main>
</template>




<script>
import why from './why';
import howitswork from './howitswork';
import heal from './heal';

export default {
  components: {
    'app-why': why,
    'app-howitswork': howitswork,
    'app-heal': heal,
  },
};
</script>



<style scoped>

</style>