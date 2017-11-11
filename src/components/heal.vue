<template>
  <div class="heal">
    <div class="wrapper">
      <h2>Хватит терять здоровый сон. Вылечите свою подушку!</h2>
      <div class="columns">
        <div class="column">Пофессионализм сотрудников и дополнительные услуги.</div>
        <div class="column">Пунктуальность в работе курьеров, своевременная доставка и сбор подушек.</div>
        <div class="column">Убийственная очистка от грязи, пыли и микроорганизмов.</div>
      </div>
    </div>
    <img class="rightPilow" src="../assets/p5.png" alt="pillow">
    <img class="leftPilow" src="../assets/p6.png" alt="pillow">


    <div class="arrow"></div>
    <div class="myButton">Заказать услугу</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.heal {
  background-image: radial-gradient(circle at 31% 18%, #2894e6, #1c84d3 62%, #157bc8);
  background-color: var(--mainBlue);
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.09);
  min-height: 560px;
  position: relative;
  & img {
    position: absolute;
  }
  & .rightPilow {
    width: 240px;
    right: 2%;
    top: 0%;
  }
  & .leftPilow {
    left: 0%;
    top: 12%;
    width: 261px;
  }
  & .myButton {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .arrow {
    bottom: 20%;
    left: 50%;
  }
}
.wrapper {
  color: #fff;
  & h2 {
    font-size: responsive 2rem 4rem;
    text-align: center;
    padding-top: 3rem;
    max-width: 850px;
    margin: 0 auto;
  }
  & .columns {
    margin-top: 4rem;
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
  }
}
</style>