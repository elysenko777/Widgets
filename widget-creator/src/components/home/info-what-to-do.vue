<template lang="">
  <div class="info-what-to-do">
    <h2>Функции виджетов на сайте</h2>
    <div class="info-what-to-do__container">
      <img src="../../assets/widget-function.png" alt="widget function" />
      <ul class="info-what-to-do__list" v-html="functionsBlock"></ul>
    </div>
  </div>
</template>

<script>
import widgetFunctions from "../../data/widgetFunctions";
export default {
  setup() {
    const functionsBlock = widgetFunctions
      .map((item, index) => {
        return `<li class="info-what-to-do__item">
              <span class="info-what-to-do__id">${++index}</span>
              <p class="info-what-to-do__text"> ${item} </p>
            </li>`;
      })
      .join("");
    return {
      functionsBlock
    };
  }
};
</script>

<style lang="scss">
@import "../../style/home/info-what-to-do.scss";
</style>
