<template lang="">
  <div class="widget-info">
    <ul class="widget-info__list" v-html="widgetBlock"></ul>
  </div>
</template>

<script>
export default {
  setup() {
    const widgetList = [
      {
        icon: "countdown.png",
        title: "countdown",
        description: `Когда должно произойти что-то важное, 
                    вы можете использовать отсчет секунд, минут, часов, 
                    и дней до нужного момента. С помощью этого виджета, 
                    вы можете легко проинформировать клиентов, сколько 
                    времени осталось до акций или распродажи, создать 
                    свой собственный отсчет времени до любого другого 
                    важного события на вашем сайте.`
      },
      {
        icon: "popup.png",
        title: "popup",
        description: `Это всплывающее окно, которое появляется во время посещения страницы. 
                    Вы можете использовать его для рекламы услуг и продуктов компании.`
      },
      {
        icon: "sticky-popup.png",
        title: "sticky popup redirect",
        description: `Это статический, выезжающий popup, который находится сбоку на странице все время. 
                    Вы можете использовать его для показа рекламы, акций, и новостей. 
                    Менее навязчивый, нежели обычный попап.`
      }
    ];
    const widgetBlock = widgetList
      .map(item => {
        const { icon, title, description } = item;
        return `<li class="widget-info__item">
                <img src="/images/${icon}" class="widget-info__icon" alt="" title=""/>
                <div>
                    <p class="widget-info__title">${title}</p>
                    <p class="widget-info__description">${description}</p>
                    <p class="widget-info__btn">
                        <span class="widget-info__btn-add-widget"> Добавить + </span>
                    </p>
                </div>
            </li>`;
      })
      .join("");
    return {
      widgetBlock
    };
  }
};
</script>

<style lang="scss">
.widget-info {
  &__list {
    display: flex;
    flex-direction: column;
  }
  &__item {
    display: flex;
    margin: 10px 0px;
    padding: 15px 10px;
    width: 100%;
    border: 3px solid #8891da;
    border-style: dashed;
    border-radius: 10px;
    align-items: center;
    p {
      padding: 0px;
    }
  }
  &__icon {
    width: 90px;
    height: 90px;
    padding: 0px 35px 0px 20px;
  }
  &__title {
    font-weight: bold;
    text-transform: uppercase;
    margin: 10px 0px;
  }
  &__btn {
    width: 100%;
    text-align: right;
    &-add-widget {
      display: inline-block;
      padding: 10px 20px;
      color: #ff8236;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>
