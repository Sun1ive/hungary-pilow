<template>
  <div class="work">
    <div class="wrapper">
      <h2>Hogyan műkődik?</h2>
      <div class="Box" data-aos="fade-up">
        <div class="Number One">1</div>
        <img src="../assets/s1.png" alt="avatar">
        <p>Ön megmondja mikor vehető fel a páciens.</p>
      </div>
      <div class="Box" data-aos="fade-right">
        <div class="Number">2</div>
        <img src="../assets/s2.png" alt="avatar">
        <p>Mi összeálltunk egy útvonalat városában és az összes beteg párnácskát összegyűjtünk.</p>
      </div>
      <div class="Box" data-aos="fade-left">
        <div class="Number">3</div>
        <img src="../assets/s3.png" alt="avatar">
        <p>Eltávolítjuk a baktériumokat és a szennyeződéseket a párnákból.</p>
      </div>
      <div class="Box" data-aos="fade-down">
        <div class="Number">4</div>
        <img src="../assets/s4.png" alt="avatar">
        <p>-Egy teljesen új és minőségi huzatba helyezzük a tiszta tollakat, és szükség esetén módosítást is vállalunk.</p>
      </div>
      <div class="Box" data-aos="fade-up">
        <div class="Number">5</div>
        <img src="../assets/s5.png" alt="avatar">
        <p>Estig egy kifogástalanul tiszta párnát hozunk vissza.</p>
      </div>
      <div class="Box" data-aos="fade-right">
        <div class="Number">6</div>
        <img src="../assets/s6.png" alt="avatar">
        <p>Segítünk egy éves párnatisztítási grafikát létrehozni.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work {
  min-height: 1400px;
  background-image: url('../assets/22.jpg');
}
.wrapper {
  max-width: 670px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & h2 {
    font-size: responsive 1.5rem 4rem;
    padding: 0.5rem 3rem;
    border-radius: 24px;
    color: var(--mainBlue);
    margin: 5rem 0 2rem 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.11);
    font-family: Helvetica, Arial, serif;
  }
  & .Box {
    display: flex;
    align-items: center;
    font-size: responsive 1rem 1.5rem;
    color: var(--para);
    font-family: Helvetica, Arial, sans-serif;
    line-height: 2rem;
    position: relative;
    & p {
      margin-left: 2rem;
    }
    & img {
      width: 181px;
      height: 181px;
      z-index: 2;
      transition: .4s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
    &:nth-child(3),
    &:nth-child(5),
    &:nth-child(7) {
      flex-direction: row-reverse;
      & .Number {
        right: -10%;
      }
    }
  }
}

.Number {
  font-size: 20rem;
  font-family: Helvetica, Arial, sans-serif;
  color: var(--mainBlue);
  opacity: .1;
  z-index: 1;
  position: absolute;
  right: 80%;
}

@media (max-width: 800px) {
  .wrapper .Box:nth-child(3) .Number, .wrapper .Box:nth-child(5) .Number, .wrapper .Box:nth-child(7) .Number {
    right: 0;
  }
}


@media (max-width: 440px) {
  .wrapper .Box {
    &:nth-child(3),
    &:nth-child(5),
    &:nth-child(7) {
      flex-direction: column;
      margin: 3rem 0;
      & .Number {
        right: 0;
      }
    }
    flex-direction: column;
    &:nth-child(7) {
      margin-bottom: 3rem;
    }
  }
  .wrapper .Box p {
    margin-left: 0;
    text-align: center;
  }
  .Number {
    font-size: 15rem;
    bottom: 50%;
    left: 5%;
  }
  .One {
    left: -10%;
  }
}
</style>