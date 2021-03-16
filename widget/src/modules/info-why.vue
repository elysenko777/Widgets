<template lang="">
  <div class="info-why">
    <h2>Зачем нужны виджеты</h2>
    <ul class="info-why__list" v-html="infoWhyBlock"></ul>
  </div>
</template>

<script>
export default {
  setup() {
    const widgetMeaning = [
      {
        text: "Удобство в использовании сайта",
        icon: "easy-use.png"
      },
      {
        text: "Работают на привлечение внимания зашедшего пользователя",
        icon: "user-attention.png"
      },
      {
        text:
          "Способ увеличить конверсию и повысить уровень лояльности клиентов",
        icon: "conversion-increase.png"
      },
      {
        text: "Непрерывный поток продаж",
        icon: "sales-flow.png"
      }
    ];
    const infoWhyBlock = widgetMeaning
      .map(item => {
        return `<li class="info-why__item" >
                <img class="info-why__icon" src="${item.icon}" />
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
    max-width: 414px;
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
    padding: 0px 0px 0px 15px;
    font-size: 18px;
    text-align: left;
  }
}
</style>
