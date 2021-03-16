<template>
  <div class="home">
    <div class="header">
      <div class="header-bg"></div>
    </div>
    <Info />
  </div>
</template>

<script lang="ts">
import Info from "../components/info.vue";

export default {
  components: {
    Info
  }
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  overflow: hidden;
  &-bg {
    width: 160%;
    height: 615px;
    background-image: url(../assets/head.png);
    background-position: center;
    margin-left: -30%;
  }
}
</style>
