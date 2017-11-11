<template>
  <div class="formContainer">
    <form class="form">
      <h2>Оставьте свои данные</h2>
      <div class="wrap">
        <img src="../assets/clock.svg" alt="clock">
        <span>Затратите 19 секунд</span>
      </div>

      <div class="field">
        <label class="label">Имя</label>
        <div class="control">
          <input class="input" type="text" placeholder="name">
        </div>
      </div>
    
      <div class="field">
        <label class="label">Телефон</label>
        <div class="control">
          <input class="input" type="text" placeholder="phone">
        </div>
      </div>

      <div class="field">
        <label class="label">Город</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </div>
        </div>
      </div>
      <p>Наш менеджер уже набирает <br> ваш номер</p>
      <div class="myButton">Отправить</div>
    </form>
  </div>
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
};
</script>

<style scoped>
.formContainer {
  min-height: 600px;
  background-image: radial-gradient(circle at 31% 18%, #2894e6, #157bc8);
  background-color: var(--mainBlue);
  display: flex;
  justify-content: center;
  align-items: center;
}
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
  & p {
    text-align: center;
    margin: 1rem 0;
    color: var(--mainBlue);
    opacity: .5;
    font-family: Helvetica, Arial, serif;
  }
  & .myButton {
    min-width: 130px;
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
</style>