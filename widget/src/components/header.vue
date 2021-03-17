<template lang="">
  <header class="header">
    <div class="header-bg"></div>
    <div class="header-content">
      <div class="header-container">
        <img src="../assets/logo.png" id="logo" alt="logo" title="" />
        <div id="nav" class="nav">
          <router-link to="/">Главная</router-link> |
          <router-link to="/creator">Конструктор</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: relative;
  width: 100%;
  overflow: hidden;
  &-bg {
    width: 160%;
    height: 453px;
    background: {
      image: url("../assets/head.png");
      position: center;
      repeat: no-repeat;
    }
    margin-left: -30%;
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
</style>
