<template>
  <header>
    <div class="wrapper">
      <div class="header">
        <div class="flex">
          <h1>Ваша подушка в опасности!</h1>
          <p>Подушки после долгого использования хранят в себе пыль, являются средой обитания многих микрооганизмов и приносят вред вашему здоровью.Хотите хорошо высыпаться, заботитесь о своем здоровье и любите близких? Закажите очистку подушки.</p>
          <div class="myButton">Заказать услугу</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: #f6f6f6;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  & .flex {
    width: 65%;
    margin-right: auto;
  }
  & h1 {
    font-size: responsive 2rem 4rem;
    line-height: 1.06;
    font-family: CharterC-Bold, Arial;
    color: var(--mainBlue);
    background-color: #fff;
    border-radius: 20px;
    padding: 1rem 2rem;
  }
  & p {
    color: var(--mainBlue);
    font-family: 'Helvetica', Arial, sans-serif;
    letter-spacing: 0.3px;
    font-size: responsive 1rem 1.1rem;
    width: 65%;
    margin: 1rem 0 2rem 3rem;
  }
  & .myButton {
    margin-left: 3rem;
  }
}
</style>