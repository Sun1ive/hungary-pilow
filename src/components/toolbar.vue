<template>
  <div class="wrapper">
    <div class="toolbar">
      <img src="../assets/logo.png" alt="logo">
      <ul class="menu">
        <li><a href="mailto:example@example.com">example@example.com</a></li>
        <li><a href="tel:12321312">321312321</a></li>
        <li>Приветствие</li>
        <li>Преимущества</li>
        <li>О нас</li>
        <li>Отзывы</li>
      </ul>
      <div class="myButton">Заказать услугу</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.toolbar {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-around;
}
.menu {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>