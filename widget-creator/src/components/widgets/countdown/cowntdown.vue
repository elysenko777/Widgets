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
.countdown {
  position: relative;
  display: block;
  width: calc(100% - 110px);
  padding: 10px 60px 10px 30px;
  margin: 10px;
  background: #00004b;
  text-decoration: none;
  &-data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__text {
      color: #fff;
      font-weight: bold;
    }
    &__btn {
      background: #fff;
      display: inline-block;
      padding: 5px 10px;
      font-weight: bold;
      font-size: small;
      border-radius: 2px;
      color: #000;
      text-align: center;
    }
  }
}
.end-message {
  text-align: center;
  padding: 10px 16px 20px;
  font-weight: bold;
}

@media screen and (max-width: 767px) {
  .countdown {
    padding: 30px 20px;
    width: calc(100% - 60px);
    &-data {
      flex-direction: column;
      &__text {
        margin-bottom: 20px;
        text-align: center;
      }
      &__btn {
        display: none;
      }
    }
    &-close {
      top: 6px;
      padding: 5px;
      right: 10px;
      transform: none;
    }
  }
}
</style>
