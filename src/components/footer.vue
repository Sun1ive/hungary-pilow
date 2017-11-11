<template>
  <footer>
    <div class="footer">
      <ul class="socials">
        <li><a href="#"><img src="../assets/facebook.svg" alt="facebook"></a></li>
        <li><a href="#"><img src="../assets/instagram.svg" alt="isntagram"></a></li>
      </ul>
      <div class="up"></div>
    </div>
  </footer>
</template>

<script>
export default {};
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
      margin: 0 .5rem
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