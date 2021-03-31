<template lang="">
  <header class="header">
    <div class="header-bg"><div></div></div>
    <div class="header-content">
      <div class="header-container">
        <img src="../assets/logo.png" id="logo" alt="logo" title="" />
        <div id="nav" class="nav">
          <router-link to="/">Главная</router-link> |
          <router-link to="/widgets">Виджеты</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: relative;
  width: 100%;
  &-bg {
    overflow: hidden;
    div {
      width: 160%;
      height: 453px;
      background: {
        image: url("../assets/head.png");
        position: center;
        repeat: no-repeat;
      }
      margin-left: -30%;
    }
  }
  &-content {
    position: absolute;
    top: 15px;
    left: 0;
    width: 100%;
  }
  &-container {
    display: flex;
    padding: 8px 16px;
    max-width: 960px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
  #logo {
    width: 250px;
  }
  #nav {
    color: #fff;
    a {
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      &.router-link-exact-active {
        color: #ffb465;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  #nav {
    font-size: medium;
  }
}
@media screen and (max-width: 580px) {
  .header {
    &-container {
      flex-direction: column;
      height: 455px;
    }
    #nav {
      color: #2c3e50;
      align-self: flex-start;
      a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        &.router-link-exact-active {
          color: #ffb465;
        }
      }
    }
  }
}
</style>
