<template>
  <div class="formContainer">
    <app-form></app-form>
  </div>
</template>

<script>
import form from './form';

export default {
  components: {
    'app-form': form,
  },
};
</script>

<style scoped>
.formContainer {
  min-height: 600px;
  background-image: radial-gradient(circle at 31% 18%, #2894e6, #157bc8);
  background-color: var(--mainBlue);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>