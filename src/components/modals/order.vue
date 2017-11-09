<template>
  <div :class="{ 'is-active': active }" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam sit illum eligendi dolorum labore quo illo fuga! Rerum accusantium iure aspernatur ab tempora perspiciatis id a minus iusto doloribus.
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeOrder"></button>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
  },
  methods: {
    closeOrder() {
      this.$emit('closeOrder');
    },
  },
};
</script>

<style scoped>
.modal-content {
  background-color: #fff;
}
</style>