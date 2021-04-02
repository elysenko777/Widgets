<template lang="">
  <div class="sticky-popup" v-if="hasBanner">
    <div class="sticky-popup-container">
      <div class="sticky-popup-trigger">
        <span></span>
      </div>
      <div class="sticky-popup-content">
        <div class="sticky-popup-info">
          <a href="" class="sticky-popup-info__title">
            20% скидки на любую большую пиццу на самовывоз!
          </a>
          <p class="sticky-popup-info__promo">
            <input readonly value="BIG20" ref="code" @click="copyCode" />
          </p>
          <p class="sticky-popup-info__description">
            *Чтобы получить скидку, воспользуйтесь промокодом.<br />
            Предложение действует при заказе на самовынос практически во всех
            городах до 10.04.2021.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import store from "../../store/index";

export default {
  setup: () => {
    const hasBanner = ref();
    hasBanner.value = store.state.demo.visible.sticky;
    const code = ref(null);
    const copyCode = () => {
      code.value.select();
      document.execCommand("copy");
    };
    watchEffect(() => {
      hasBanner.value = store.state.demo.visible.sticky;
    });
    return {
      hasBanner,
      code,
      copyCode
    };
  }
};
</script>

<style lang="scss">
@import "../../style/demo-sticky-popup.scss";
</style>
