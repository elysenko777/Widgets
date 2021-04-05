<template lang="">
  <div class="info-why">
    <h2>Зачем нужны виджеты</h2>
    <ul class="info-why__list" v-html="infoWhyBlock"></ul>
  </div>
</template>

<script>
import widgetMeaning from "../../data/widgetMeaning";
export default {
  setup() {
    const infoWhyBlock = widgetMeaning
      .map(item => {
        return `<li class="info-why__item" >
                <img class="info-why__icon" src="/images/${item.icon}" />
                <p class="info-why__text">${item.text}</p>
            </li>`;
      })
      .join("");
    return {
      infoWhyBlock
    };
  }
};
</script>

<style lang="scss">
@import "../../style/home/info-why.scss";
</style>
