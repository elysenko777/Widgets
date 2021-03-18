<template>
  <div class="info" v-once>
    <div class="info-container">
      <InfoWhat />
      <InfoWhy />
      <InfoFunctions />
      <Conclusion />
    </div>
  </div>
</template>

<script lang="ts">
import InfoWhat from "./info-what.vue";
import InfoWhy from "./info-why.vue";
import InfoFunctions from "./info-what-to-do.vue";
import Conclusion from "./conclusion.vue";

export default {
  components: {
    InfoWhat,
    InfoWhy,
    InfoFunctions,
    Conclusion
  }
};
</script>

<style scoped lang="scss">
.info {
  padding: 20px 16px 50px;
  &-container {
    max-width: 960px;
    margin: 0 auto;
  }
}
</style>
