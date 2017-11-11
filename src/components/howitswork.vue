<template>
  <div class="work">
    <div class="wrapper">
      <h2>Hogyan műkődik?</h2>
      <div class="Box">
        <img src="../assets/s1.png" alt="avatar">
        <p>Ön megmondja, mikor vehető fel a páciens.</p>
      </div>
      <div class="Box">
        <img src="../assets/s2.png" alt="avatar">
        <p>Mi összeállítunk egy útvonalat városában és az összes beteg párnácskákat összegyűjtünk.</p>
      </div>
      <div class="Box">
        <img src="../assets/s3.png" alt="avatar">
        <p>Eltávolítunk a baktériumokat és a szennyződéseket a párnákból.</p>
      </div>
      <div class="Box">
        <img src="../assets/s4.png" alt="avatar">
        <p>-Egy teljesen új és minőségi huzatba helyezzük a tiszta tollakat, és szükség esetén módosítást is vállalunk.</p>
      </div>
      <div class="Box">
        <img src="../assets/s5.png" alt="avatar">
        <p>Estig egy kifogástalanul tiszta párnát hozunk vissza.</p>
      </div>
      <div class="Box">
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
    font-family: Helvetica, Arial, sans-serif;
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