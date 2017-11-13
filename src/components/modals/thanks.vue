<template>
  <div :class="{ 'is-active': isActive }" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <h2>Спасибо за заявку!</h2>
      <p>Мы уже выехали за Вами</p>
    <div class="close" @click="closeThanks"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
  },
  methods: {
    closeThanks() {
      this.$emit('closeThanks');
    },
  },
};
</script>

<style scoped>
.modal-content {
  background-color: #fff;
  min-height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.close {
  position: absolute;
  top: 10%;
  right: 2%;
}
</style>