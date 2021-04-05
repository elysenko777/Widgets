<template lang="">
  <div class="modal-popup">
    <div class="overlay" @click.stop.prevent="closePopup"></div>
    <div class="popup">
      <div class="popup-container">
        <CloseIcon @click.stop.prevent="closePopup" />
        <div class="popup-content">
          <div class="popup-info">
            <p class="popup-info__title">
              Мороженое на ваше торжество
            </p>
            <p class="popup-info__description">
              Вкус нашего мороженого станет отличным дополнением к вашему
              празднику!
            </p>
            <a
              class="popup-info__link"
              href="https://icecraft.ru/catalog"
              target="_blank"
            >
              Перейти в каталог
            </a>
          </div>
        </div>
        <div class="popup-image"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "../close-icon";
import { watchEffect } from "vue";
import store from "../../store/index";

export default {
  components: {
    CloseIcon
  },
  setup: () => {
    const changeBodyOverflow = () => {
      const hasBanner = store.state.demo.visible.popup;
      hasBanner
        ? document.body.setAttribute("overflow", "hidden")
        : document.body.removeAttribute("overflow");
    };
    watchEffect(() => {
      changeBodyOverflow();
    });
    const closePopup = () => {
      const widgetInfo = {
        name: "popup",
        status: false
      };
      store.dispatch("toggleDemo", widgetInfo);
    };
    return {
      closePopup
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/widgets/demo-popup.scss";
.close-icon {
  top: 20px;
  right: 11px;
  padding: 5px;
}
</style>
