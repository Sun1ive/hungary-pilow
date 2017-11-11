<template>
  <div ref="modal" :class="{ 'is-active': active }" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <app-form></app-form>
    <div class="close" @click="closeOrder"></div>
    </div>
    <!-- <button class="modal-close is-large" aria-label="close" @click="closeOrder"></button> -->
  </div>
</template>

<script>
import form from '../form';

export default {
  components: {
    'app-form': form,
  },
  props: {
    active: Boolean,
  },
  methods: {
    closeOrder() {
      this.$emit('closeOrder');
    },
  },
  mounted() {
    const modal = this.$refs.modal.classList.contains('is-active');
    if (modal) {
      modal.classList.remove('is-active');
    }
  },
};
</script>

<style scoped>
.modal-content {
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 440px;
}
.close {
  top: 4%;
  right: 5%;
}
</style>