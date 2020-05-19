<template>
  <div>
    <div class="heading">
      <router-link to="/">
        <div class="heading__logo">
          <h1>Oi<br />shi</h1>
        </div>
      </router-link>
      <nav>
        <ul>
          <router-link to="/">
            <li>Accueil</li>
          </router-link>
          <router-link to="/listing">
            <li>Nos critiques</li>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/misc/mixins.scss";

.heading {
  height: 155px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-image: url("~@/assets/img/bg.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  @media only screen and (min-width: 768px) {
    min-height: 30vh;
    background-position: left;
    background-size: 60%;
  }
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

  nav {
    display: none;

    @media only screen and (min-width: 768px) {
      display: flex;
      width: 100%;
      justify-content: flex-end;

      ul {
        display: flex;
        margin-right: 2rem;
        color: black;

        .router-link-exact-active {
          li {
            padding-bottom: 10px;

            border-bottom: solid 2px $green;
          }
        }

        li {
          margin: 3.25rem;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
