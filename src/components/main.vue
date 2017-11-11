<template>
  <main>
    <app-why></app-why>
    <app-howitswork></app-howitswork>
  </main>
</template>




<script>
import why from './why';
import howitswork from './howitswork';

export default {
  components: {
    'app-why': why,
    'app-howitswork': howitswork,
  },
};
</script>



<style scoped>

</style>