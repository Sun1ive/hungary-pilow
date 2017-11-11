<template>
  <form class="form" @submit.prevent="submit">
    <h2>Töltse ki adatait</h2>
    <div class="wrap">
      <img src="../assets/clock.svg" alt="clock">
      <span>19 másodpercig tart</span>
    </div>
    <div class="field">
      <label class="label">Név</label>
      <div class="control">
        <input v-model.lazy="userData.name" class="input" type="text" placeholder="Név">
      </div>
    </div>
    <div class="field">
      <label class="label">Telefonszám</label>
      <div class="control">
        <input v-model.lazy="userData.phone" class="input" type="text" placeholder="Telefonszám">
      </div>
    </div>
    <div class="field">
      <label class="label">Helység</label>
      <div class="control">
        <input v-model.lazy="userData.city" class="input" type="text" placeholder="Helység">
      </div>
    </div>
    <p>Menedszerünk már tárcsázza <br> az Ön telefonszámát</p>
    <button class="myButton" type="submit">Küldés</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: '',
        phone: '',
        city: '',
      },
    };
  },
  methods: {
    submit() {
      const modal = document.querySelector('.modal');
      // Email.send(
      //   `coats@indresser.com`,
      //   // 'info@indresser.com',
      //   'sunliveua@gmail.com',
      //   'Заказ с сайта hungary-pilow',
      //   `Пользователь: ${this.userData.name},
      //   Город: ${this.userData.city},,
      //   Телефон: ${this.userData.phone}`,
      //   'mail.adm.tools',
      //   'coats@indresser.com',
      //   '3DLao3x1AC8t',
      // );
      if (modal.classList.contains('is-active')) {
        this.$emit('closeOrder');
      }

      this.userData = {
        name: '',
        phone: '',
        city: '',
      };
    },
  },
};
</script>

<style scoped>
.form {
  width: 430px;
  height: 530px;
  background-color: #fff;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  & p {
    text-align: center;
    margin: 1rem 0;
    color: var(--mainBlue);
    opacity: 0.5;
    font-family: Helvetica, Arial, serif;
  }
  & .myButton {
    min-width: 130px;
    border: none;
  }
  & h2 {
    font-size: responsive 1.5rem 2rem;
    color: var(--mainBlue);
  }
}
.wrap {
  display: flex;
  align-items: center;
  color: var(--mainBlue);
  font-family: Helvetica, Arial, serif;
  font-style: oblique;
}
.select select {
  width: 185px;
}
.field {
  width: 230px;
}
.label {
  color: var(--mainBlue);
}
</style>