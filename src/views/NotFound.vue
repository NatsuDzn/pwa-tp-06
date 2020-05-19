<template>
  <div class="error">
    <h1>404</h1>
    <p>The page you are looking for has not been found.</p>
    <router-link to="/">
      <button>Go back to the homepage</button>
    </router-link>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/misc/mixins.scss";

.error {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 10rem;
    color: $green;
    margin: 1.5rem 0;
  }

  p {
    margin: 0.5rem 0;
  }

  button {
    font-family: "Poppins";
    margin: 1.5rem 0;
    margin-bottom: 0;
    outline: 0;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    background: $green;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    box-shadow: 0px 4px 35px rgba(189, 189, 189, 0.25);
    transition: all ease 0.75s;
    cursor: pointer;

    &:active {
      transform: scale(0.85);
    }
  }
}
</style>
