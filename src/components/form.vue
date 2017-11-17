<template>
  <form class="form" @submit.prevent="submit">
    <h2>Completati datele dvs</h2>
    <div class="wrap">
      <img src="../assets/clock.svg" alt="clock">
      <span>Dureaza 19 secunde</span>
    </div>
    <div class="field">
      <label class="label">Nume</label>
      <div class="control">
        <input required v-model.lazy="userData.name" class="input" type="text" placeholder="Nume">
      </div>
    </div>
    <div class="field">
      <label class="label">Telefon</label>
      <div class="control">
        <input required v-model.lazy="userData.phone" class="input" type="text" placeholder="Telefon">
      </div>
    </div>
    <div class="field">
      <label class="label">Oras</label>
      <div class="control">
        <input required v-model.lazy="userData.city" class="input" type="text" placeholder="Oras">
      </div>
    </div>
    <p>Managerul nostru deja apeleaza numarul dvs</p>
    <button class="myButton" type="submit">Trimite</button>

    <app-thanks @closeThanks="closeThanks" :isActive="isActive"></app-thanks>
  </form>
</template>

<script>
import thanks from './modals/thanks';

export default {
  components: {
    'app-thanks': thanks,
  },
  data() {
    return {
      userData: {
        name: '',
        phone: '',
        city: '',
      },
      isActive: false,
    };
  },
  methods: {
    submit() {
      Email.send(
        `t5@httforyou.ro`,
        'vi290983mal@gmail.com, dispeceratperne@gmail.com, ciobanu_andrew@yahoo.com',
        'Comandă de pe site Health Through Tradition',
        `Nume: ${this.userData.name},
        Oraș: ${this.userData.city},
        Telefon: ${this.userData.phone}`,
        'mail.adm.tools',
        't5@httforyou.ro',
        'pSe4b35c6NFJ',
      );
      this.isActive = true;
      this.userData = {
        name: '',
        phone: '',
        city: '',
      };
    },
    closeThanks() {
      this.isActive = false;
      this.$emit('closeOrder');
    }
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
    font-size: responsive 1.1rem 2rem;
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

@media (max-width: 440px) {
  .form {
    height: 320px;
    width: 350px;
  }
  .form p {
    display: none;
  }
  .wrap {
    display: none;
  }
}

@media (max-width: 340px) {
  .form {
    width: 300px;
  }
}
</style>