<template>
  <div class="toolbar">
    <div class="wrapper">
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
  background-color: #fff;
  border: 1px solid #333;
}
.wrapper {
  display: flex;
  height: 60px;
  align-items: center;
  & img {
    height: 47px;
    width: 90px;
  }
}
.menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--mainBlue);
  font-family: Arial, Helvetica, sans-serif;
}

.fixed {
  position: fixed;
  top: 30px;
  width: 100%;
}
</style>