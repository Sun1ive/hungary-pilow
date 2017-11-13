<template>
  <div :class="{ 'is-active': isActive }" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
    <h2>Спасибо!</h2>
    <div class="wrap">
      <img src="../../assets/clock.svg" alt="clock">
      <span>Наш менеджер скоро свяжется с Вами</span>
    </div>
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
  flex-direction: column;
  border-radius: 11px;
  min-height: 200px;
}
h2 {
  font-size: responsive 2rem 3rem;
  color: var(--mainBlue);
}
.close {
  position: absolute;
  top: 10%;
  right: 2%;
}
.wrap {
  display: flex;
  align-items: center;
}
.wrap span {
  color: var(--blue);
  font-size: responsive 1rem 2rem;
}
</style>