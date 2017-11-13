<template>
  <div :class="{ 'is-active': isActive }" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
    <h2>Köszönjük szépen!</h2>
    <div class="wrap">
      <!-- <img src="../../assets/clock.svg" alt="clock"> -->
      <div class="clock"></div>
      <span>Menedzserünk felveszi Önnel a kapcsolatot és az összes részletet feljegyzi.</span>
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
.clock {
  background-image: url('../../assets/clock.svg');
  background-repeat: no-repeat;
  background-position: center center;
  width: 70px;
  height: 70px;
}
h2 {
  font-size: responsive 2rem 3rem;
  color: var(--mainBlue);
}
.close {
  position: absolute;
  top: 5%;
  right: 2%;
}
.wrap {
  display: flex;
  align-items: center;
}
.wrap span {
  color: var(--blue);
  font-size: responsive 1rem 1.3rem;
  margin: 1rem 1rem 0 1rem;
}
</style>