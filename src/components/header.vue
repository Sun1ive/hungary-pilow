<template>
  <header>
    <div class="wrapper">
      <div class="header">
        <div class="flex">
          <h1>Párnája veszélyben van!</h1>
          <p>Hosszú használat után, a párnák nagy mennyiségű port képesek felvenni, és kiváló környezetet biztosítanak különböző mikroorganizmusnak, illetve baktériumnak, amelyek károsak egészségére. Szeretne nyugodtan aludni és ugyanakkor szerettei egészségére vigyázni? <br> Rendeljen párna tisztítást.</p>
          <div class="myButton">Rendeljen most</div>
          <img class="pilow" src="../assets/p1.png" alt="pilow">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: #c0c0c0;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  position: relative;
  & .flex {
    width: 65%;
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
    font-size: responsive 1rem 1.1rem;
    width: 65%;
    margin: 2rem 0 2rem 3rem;
  }
  & .myButton {
    margin-left: 3rem;
  }
}
</style>