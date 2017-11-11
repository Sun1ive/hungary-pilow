<template>
  <main>
    <app-why></app-why>
    <app-howitswork></app-howitswork>
    <app-heal></app-heal>
    <app-reviews></app-reviews>
    <app-offer></app-offer>
    <app-video></app-video>
  </main>
</template>




<script>
import why from './why';
import howitswork from './howitswork';
import heal from './heal';
import reviews from './reviews';
import offer from './offer';
import video from './video';

export default {
  components: {
    'app-why': why,
    'app-howitswork': howitswork,
    'app-heal': heal,
    'app-reviews': reviews,
    'app-offer': offer,
    'app-video': video,
  },
};
</script>



<style scoped>

</style>