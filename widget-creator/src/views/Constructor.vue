<template lang="">
  <div class="container">
    <WidgetList />
  </div>
</template>

<script>
import WidgetList from "../components/constructor/widget-list.vue";
export default {
  components: {
    WidgetList
  }
};
</script>

<style lang="scss">
.container {
  max-width: 960px;
  margin: 15px auto;
  padding: 20px 16px 50px;
}
</style>
