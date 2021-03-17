<template>
  <div class="info">
    <div class="info-container">
      <InfoWhat />
      <InfoWhy />
      <InfoFunctions />
      <Conclusion />
    </div>
  </div>
</template>

<script lang="ts">
import InfoWhat from "../modules/info-what.vue";
import InfoWhy from "../modules/info-why.vue";
import InfoFunctions from "../modules/info-what-to-do.vue";
import Conclusion from "../modules/conclusion.vue";

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
