<template>
  <div id="nav">
    <router-link to="/">Creator</router-link> |
    <router-link to="/creator">Widgets</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

h2 {
  padding: 15px 0px;
}

p {
  padding: 15px 0px;
  text-align: justify;
  line-height: 1.3;
}

em {
  font-weight: bold;
  color: #ff8236;
}

li {
  list-style: none;
}

h1,
h2,
h3 {
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.125rem;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
