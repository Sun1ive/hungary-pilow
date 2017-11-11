<template>
  <div class="video">
    <h2>Nézze meg a következő tájekoztató videót szolgáltatásunkról</h2>
    <!-- <iframe width="620" height="345" src="https://www.youtube-nocookie.com/embed/bag-O-KrswA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe> -->
    <!-- <video src="/static/hungary.mp4" controls width="550" height="300"></video> -->
    <div class="myButton">Rendeljen most</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.video {
  min-height: 600px;
  background-image: radial-gradient(circle at 50% 0, #ffffff, #f1f1f1);
  background-image: url('../assets/2.jpg');
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: responsive 1rem 2rem;
  color: var(--mainBlue);
  position: relative;
  & .myButton {
    position: absolute;
    bottom: 6%;
  }
  & h2 {
    margin-bottom: 3rem
  }
}
</style>