<template>
  <div class="why">
    <h2>De ce este atat de necesar?</h2>
    <div class="wrapper">
      <div class="columns">
        <div class="column" data-aos="zoom-in" data-aos-delay="100">Curatarea pernelor la nivel micro, elimina toate particolele de micro praf. Distruge microorganismele care cauzeaza boli.</div>
        <div class="column" data-aos="zoom-in" data-aos-delay="300">Datorita serviciului nostru de colectare de la domiciliu, puteti sa economisiti timpul dvs. Lasati pe mina profesionistilor sa rezolve problemele intrun timp relativ scurt.</div>
        <div class="column" data-aos="zoom-in" data-aos-delay="500">Puteti opta pentru redimensionarea unei perne mari in 2 mai mici, totodata se schimba si tocul de perna vechi, cu unul nou din material de calitate.</div>
      </div>
    </div>


    <img class="bacterium1" src="../assets/p2.png" alt="bacterium">
    <img class="bacterium2" src="../assets/p2.png" alt="bacterium">
    <img class="bacterium3" src="../assets/p4.png" alt="bacterium">
  </div>
</template>

<style scoped>
.columns {
  margin: 0;
}

.why {
  min-height: 480px;
  background-image: url('../assets/3.jpg');
  background-position-x: 40%;
  background-color: var(--blue);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  overflow: hidden;
  & h2 {
    font-size: responsive 2rem 4rem;
    max-width: 700px;
    text-align: center;
    line-height: 1.1;
    margin-bottom: 3rem;
  }
  & .bacterium1 {
    position: absolute;
    width: 130px;
    height: 130px;
    right: 3%;
    top: 15%;
  } 
  & .bacterium2 {
    position: absolute;
    width: 224px;
    height: 225px;
    left: -8%;
    top: 10%;
  }
  & .bacterium3 {
    position: absolute;
    width: 70px;
    height: 50px;
    bottom: 10%;
    left: 63%;
  }
}
@media (max-width: 1100px) {
  .why .bacterium2 {
    width: 130px;
    height: 130px;
  }
}

@media (max-width: 800px) {
  .why .bacterium1 {
    width: 90px;
    height: 90px;
    top: 3%;
  }
}

@media (max-width: 500px) {
  .why {
    & .bacterium1,
    &  .bacterium2,
    &  .bacterium3 {
        display: none;
      }
  }
}

@media (max-width: 440px) {
  .columns {
    text-align: center;
    font-size: 0.9rem;
  }
}
</style>