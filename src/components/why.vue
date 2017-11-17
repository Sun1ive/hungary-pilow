<template>
  <div class="why">
    <h2>De ce este atât de necesar?</h2>
    <div class="wrapper">
      <div class="columns">
        <div class="column" data-aos="zoom-in" data-aos-delay="100">Curățarea pernelor la nivel micro  elimină toate particulele de praf, de asemenea distruge microorganismele ce pot determina apariția anumitor boli.</div>
        <div class="column" data-aos="zoom-in" data-aos-delay="300">Timpul dumneavoastră este prețios, iar datorită serviciului nostru de colectare a pernelor de la domiciliu, puteți economisi timp! Lăsați pernele pe mâna profesioniștilor și acestea vor fi ca și noi într-un timp foarte scurt!</div>
        <div class="column" data-aos="zoom-in" data-aos-delay="500">Vă putem redimensiona pernele  în funcție de dimensiunile noastre standard, de asemenea dosul dumneavoastră vechi va fi înlocuit cu unul nou, de calitate germană, bumbac 100% prin care nu o să vă mai iasă fulgii.</div>
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
    font-size: responsive 2rem 3.3rem;
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