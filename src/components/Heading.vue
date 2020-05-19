<template>
  <div>
    <div class="heading">
      <div class="heading__logo">
        <h1>Oi<br />shi</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.heading {
  height: 155px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-image: url("~@/assets/img/bg.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  //   position: sticky;
  // top: 0;

  &__logo {
    margin-left: 18px;

    h1 {
      background-color: white;
      color: black;
      font-size: 2.25rem;
      font-weight: bold;
      line-height: 54px;
      letter-spacing: 0.225em;
      text-align: left;
      padding: 0.5rem;
    }
  }
}
</style>
