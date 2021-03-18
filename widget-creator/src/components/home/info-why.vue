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
.info-why {
  &__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  &__item {
    display: flex;
    margin: 10px;
    padding: 20px;
    width: 414px;
    border: 3px solid #8891da;
    border-style: dashed;
    border-radius: 10px;
    align-items: center;
  }
  &__icon {
    width: 25%;
    height: fit-content;
  }
  &__text {
    padding-left: 15px;
    font-size: 18px;
    text-align: left;
  }
}

@media screen and (max-width: 480px) {
  .info-why {
    &__item {
      margin: 5px 0px;
      padding: 10px;
    }
    &__text {
      font-size: medium;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 998px) {
  .info-why__item {
    width: 40%;
  }
}
</style>
