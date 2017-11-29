<template>
  <div class="work">
    <div class="wrapper">
      <h2>Cum funcționează?</h2>
      <div class="Box" data-aos="fade-up">
        <div class="Number One">1</div>
        <img src="../assets/s1.png" alt="avatar">
        <p>Stabilim împreună data și ora colectării pernelor de la domiciliu dumneavoastră.</p>
      </div>
      <div class="Box" data-aos="fade-right">
        <div class="Number">2</div>
        <img src="../assets/s2.png" alt="avatar">
        <p>Noi stabilim traseul prin oraș și colectăm pernuțele bolnave.</p>
      </div>
      <div class="Box" data-aos="fade-left">
        <div class="Number">3</div>
        <img src="../assets/s3.png" alt="avatar">
        <p>Curățăm, aspirăm și tratăm penele cu o lampă UV iar bacteriile și impuritățile vor fi eliminate.</p>
      </div>
      <div class="Box" data-aos="fade-down">
        <div class="Number">4</div>
        <img src="../assets/s4.png" alt="avatar">
        <p>Vă schimbăm dosul vechi cu unul nou de calitate germană, iar dacă este necesar vă putem face și alte modificări.</p>
      </div>
      <div class="Box" data-aos="fade-up">
        <div class="Number">5</div>
        <img src="../assets/s5.png" alt="avatar">
        <p>Până seara vă aducem o pernă dezinfectată și impecabilă.</p>
      </div>
      <div class="Box" data-aos="fade-right">
        <div class="Number">6</div>
        <img src="../assets/s6.png" alt="avatar">
        <p>Vă ajutăm să creați un grafic de curățare al pernelor anual.</p>
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