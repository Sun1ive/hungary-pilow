<template>
  <div class="work">
    <div class="wrapper">
      <h2>Как это работает?</h2>
      <div class="Box">
        <img src="../assets/s1.png" alt="avatar">
        <p>Вы сообщаете когда можно забрать пациента.</p>
      </div>
      <div class="Box">
        <img src="../assets/s2.png" alt="avatar">
        <p>Мы составляем маршрут по городу и собираем больные подушечки.</p>
      </div>
      <div class="Box">
        <img src="../assets/s3.png" alt="avatar">
        <p>Очищаем перья и ткань от всяких гадостей и микропыли.</p>
      </div>
      <div class="Box">
        <img src="../assets/s4.png" alt="avatar">
        <p>Производим дополнительные работы, если такие имеются. Одеваем новый качественный наперник.</p>
      </div>
      <div class="Box">
        <img src="../assets/s5.png" alt="avatar">
        <p>Привозим вам безупречно-чистую подушку уже вечером.</p>
      </div>
      <div class="Box">
        <img src="../assets/s6.png" alt="avatar">
        <p>Помогаем создать ежегодный график чистки подушек.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.work {
  min-height: 1400px;
  background-color: #fff;
}
.wrapper {
  max-width: 670px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & h2 {
    font-size: responsive 2rem 4rem;
    padding: 0.5rem 3rem;
    border-radius: 24px;
    color: var(--mainBlue);
    margin: 5rem 0 2rem 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.11);
  }
  & .Box {
    display: flex;
    align-items: center;
    font-size: responsive 1rem 1.5rem;
    color: var(--para);
    font-family: CharterC, Arial, Helvetica, sans-serif;
    line-height: 2rem;
    & p {
      margin-left: 2rem;
    }
    & img {
      width: 181px;
      height: 181px;
    }
    &:nth-child(3),
    &:nth-child(5),
    &:nth-child(7) {
      flex-direction: row-reverse;
    }
  }
}
</style>