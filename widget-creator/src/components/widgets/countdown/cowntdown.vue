<template lang="">
  <div class="countdown-demo" v-if="hasBanner">
    <a
      class="countdown"
      v-if="!stoppedTimer"
      href="https://ru.uefa.com/uefachampionsleague/fixtures-results/"
      target="_blank"
    >
      <CloseIcon @click.stop.prevent="closeBanner" />
      <div class="countdown-data">
        <div class="countdown-data__text">
          ⚽ До конца Лиги Чемпионов осталось:
        </div>
        <Timer />
        <div class="countdown-data__btn">Смотреть<br />расписание</div>
      </div>
    </a>
    <p class="end-message" v-if="stoppedTimer">Все уже в прошлом !</p>
  </div>
</template>

<script>
import Timer from "./timer";
import CloseIcon from "../../close-icon";
import { ref, watchEffect } from "vue";
import store from "../../../store/index";
import setTime from "../../../services/setTime";

export default {
  components: {
    Timer,
    CloseIcon
  },
  setup: () => {
    const hasBanner = ref();
    const stoppedTimer = ref();
    let timer = 0;
    const changeVisible = () => {
      hasBanner.value = store.state.demo.visible.countdown;
      timer = setTime(timer);
      stoppedTimer.value = !store.state.demo.timer;
    };
    const closeBanner = () => {
      store.dispatch("hideDemo", "countdown");
    };
    changeVisible();
    watchEffect(() => {
      changeVisible();
    });
    return {
      closeBanner,
      hasBanner,
      stoppedTimer
    };
  }
};
</script>

<style lang="scss">
@import "../../../style/demo-countdown.scss";
</style>
