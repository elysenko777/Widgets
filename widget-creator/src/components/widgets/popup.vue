<template lang="">
  <div class="modal-popup" v-if="hasBanner">
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
import store from "../../store/index";
import { ref, watchEffect } from "vue";

export default {
  components: {
    CloseIcon
  },
  setup: () => {
    const hasBanner = ref();
    hasBanner.value = store.state.demo.visible.popup;
    watchEffect(() => {
      hasBanner.value = store.state.demo.visible.popup;
    });
    const closePopup = () => {
      store.dispatch("hideDemo", "popup");
    };
    return {
      hasBanner,
      closePopup
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/demo-popup.scss";
.close-icon {
  top: 20px;
  right: 11px;
  padding: 5px;
}
</style>
