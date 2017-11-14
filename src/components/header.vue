<template>
  <header>
    <div class="wrapper">
      <div class="header">
        <div class="flex">
          <h1>Perna Dv este in pericol!</h1>
          <img class="pilow" src="../assets/p1.png" alt="pilow">
          <p>Pernele, dupa o lunga intrebuintare, aduna in ele praf, si creeaza un mediu favorabil pentru dezvoltarea multor microorganisme si bacterii care dauneaza sanatatii dvs. Doriti sa dormiti bine si sa aveti grija de sanatatea dvs si a celor dragi? <br> Comandati o curatare a pernelor.</p>
          <div class="myButton" @click="showOrder">Comanda acum</div>
        </div>
      </div>
    </div>

    <app-order @closeOrder="closeOrder" :active="active"></app-order>
  </header>
</template>

<script>
import order from './modals/order';

export default {
  components: {
    'app-order': order,
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    showOrder() {
      this.active = true;
    },
    closeOrder() {
      this.active = false;
    },
  },
};
</script>

<style scoped>
header {
  background-image: url('../assets/11.jpg');
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  position: relative;
  font-family: Helvetica, Arial, sans-serif;
  & .flex {
    width: 64%;
    margin-right: auto;
    & .pilow {
      position: absolute;
      top: 10%;
      right: -10%;
      width: 600px;
      height: 430px;
    }
  }
  & h1 {
    font-size: responsive 2rem 4rem;
    line-height: 1.06;
    color: var(--mainBlue);
    background-color: #fff;
    border-radius: 20px;
    padding: 1rem 2rem;
  }
  & p {
    color: var(--mainBlue);
    font-family: 'Helvetica', Arial, sans-serif;
    letter-spacing: 0.3px;
    font-size: 1rem;
    width: 65%;
    margin: 2rem 0 2rem 1rem;
    position: relative;
    z-index: 2;
  }
  & .myButton {
    margin-left: 3rem;
  }
}
@media (max-width: 1100px) {
  .header .flex .pilow {
    right: 0;
  }
}

@media (max-width: 600px) {
  .header .flex .pilow {
    display: none;
  }
  .header .flex {
    width: 100%;
    text-align: center;
  }
  .header p {
    margin: 0;
    width: 100%;
  }
  .header .myButton {
    margin-left: 0;
    margin: 1rem 0;
  }
}

@media (max-width: 440px) {
  .header {
    min-height: 450px;
    padding-top: 6rem;
  }
  .header .flex .pilow {
    position: relative;
    display: block;
    height: 250px;
  }
}
</style>