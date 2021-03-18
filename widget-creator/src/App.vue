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
  padding: 30px 0px 15px;
}

p {
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

@media screen and (max-width: 480px) {
  p {
    text-align: left;
    font-size: smaller;
  }
  h2 {
    font-size: larger;
  }
}
</style>
