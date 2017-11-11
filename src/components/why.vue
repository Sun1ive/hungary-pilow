<template>
  <div class="why">
    <h2>Ez miért szükséges?</h2>
    <div class="wrapper">
      <div class="columns">
        <div class="column"> Párna tisztítás mikroszkópikus szinten, az összes porszemcsék eltávolítása. Az összes betegséget okozó mikroorganizmust elpusztítja.
        </div>
        <div class="column">Házhoz szállító szolgáltatásunknak köszönhetően időt spórolhat. Bízzon szakértőnkre, hogy rövid idő alatt találjanak megoldást a feladatra.
        </div>
        <div class="column">Átméretezést is választhat egy nagy párnából két kisebb párnákká, ugyanakkor a régi huzat is egy
teljesen új, minőségi huzatra cserélődik ki.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.why {
  min-height: 480px;
  background-image: url('../assets/3.jpg');
  background-color: var(--blue);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  & h2 {
    font-size: responsive 2rem 4rem;
    max-width: 700px;
    text-align: center;
    line-height: 1.1;
    margin-bottom: 3rem
  }
}
</style>