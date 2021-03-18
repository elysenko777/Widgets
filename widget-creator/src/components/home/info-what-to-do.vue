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
.info-what-to-do {
  &__list {
    position: relative;
  }
  &__item {
    padding: 10px 0px;
    display: flex;
    align-items: center;
  }
  &__id {
    font-size: xx-large;
    font-weight: 700;
    color: #8891da;
  }
  &__text {
    padding-left: 20px;
  }
  &__container {
    display: flex;
    align-items: center;
    img {
      width: 40%;
      margin-right: 20px;
    }
  }
}

@media screen and (max-width: 480px) {
  .info-what-to-do {
    &__id {
      font-size: large;
    }
    &__item {
      padding: 7px 0px;
      align-items: flex-start;
    }
    &__text {
      padding-left: 10px;
    }
  }
}

@media screen and (max-width: 768px) {
  .info-what-to-do__container {
    flex-direction: column;
    img {
      width: 280px;
      margin-bottom: 20px;
    }
  }
}
</style>
