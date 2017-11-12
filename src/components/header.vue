<template>
  <header>
    <div class="wrapper">
      <div class="header">
        <div class="flex">
          <h1>Párnája veszélyben van!</h1>
          <p>Hosszú használat után, a párnák nagy mennyiségű port képesek felvenni, és kiváló környezetet biztosítanak különböző mikroorganizmusnak, illetve baktériumnak, amelyek károsak egészségére. Szeretne nyugodtan aludni és ugyanakkor szerettei egészségére vigyázni? <br> Rendeljen párna tisztítást.</p>
          <div class="myButton" @click="showOrder">Rendeljen most</div>
          <img class="pilow" src="../assets/p1.png" alt="pilow">
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
    min-height: 400px;
  }
}


</style>