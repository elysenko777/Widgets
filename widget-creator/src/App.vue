<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

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
</style>
