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
@import "../style/header.scss";
</style>
