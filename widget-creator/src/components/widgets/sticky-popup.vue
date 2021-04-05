<template lang="">
  <div class="sticky-popup" :visible="visible">
    <div class="sticky-popup-container">
      <div class="sticky-popup-trigger" @click="toggleVisible">
        <span></span>
      </div>
      <div class="sticky-popup-content">
        <div class="sticky-popup-info">
          <a href="https://dodopizza.ru/" class="sticky-popup-info__title">
            20% скидки на любую большую пиццу на самовывоз!
          </a>
          <p class="sticky-popup-info__promo" @click="copyCode">
            <input readonly value="BIG20" ref="code" @blur="changeMessage" />
            <span>{{ message }}</span>
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
import { ref } from "vue";

export default {
  setup: () => {
    const code = ref();
    const message = ref();
    const visible = ref();
    const changeMessage = (status = "") => {
      const defaultText = "copy code";
      const succesText = "copied";
      message.value = status === "succes" ? succesText : defaultText;
    };
    const copyCode = () => {
      code.value.select();
      document.execCommand("copy");
      changeMessage("succes");
    };
    const showStickyPopup = setTimeout(() => {
      if (!visible.value) visible.value = "true";
    }, 5000);
    const toggleVisible = () => {
      visible.value = visible.value ? "" : "true";
      clearTimeout(showStickyPopup);
    };
    changeMessage();
    return {
      code,
      copyCode,
      message,
      visible,
      toggleVisible,
      changeMessage
    };
  }
};
</script>

<style lang="scss">
@import "../../style/demo-sticky-popup.scss";
</style>
