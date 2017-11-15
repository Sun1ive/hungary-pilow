<template>
  <footer>
    <div class="footer">
      <ul class="socials">
        <li><a href="https://www.facebook.com/Curatarea.Pernelor.HTT/" target="_blank">
          <img src="../assets/facebook.svg" alt="facebook"></a>
        </li>
        <li>
          <a href="tel:0740262222">
            <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/phone-32.png" alt="telephone">
          </a>
        </li>
      </ul>
      <div class="up" @click="scrollTop"></div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.footer {
  min-height: 50px;
  background-color: #2b2b2b;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .socials {
    display: flex;
    margin-left: 1rem;
    & li {
      & img {
        width: 30px;
      }
      margin: 0 0.5rem;
    }
  }
  & .up {
    background-image: url('../assets/up.svg');
    background-repeat: no-repeat;
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-right: 1rem;
  }
}

ul li a {
  display: flex;
  align-items: center;
}
</style>