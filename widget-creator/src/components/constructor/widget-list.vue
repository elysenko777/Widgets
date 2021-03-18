<template lang="">
  <ul class="widget-list" v-html="widgetBlock"></ul>
</template>

<script>
import widgetInfoList from "../../data/widgetInfoList";
export default {
  setup() {
    const widgetBlock = widgetInfoList
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
    min-height: 155px;
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
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 480px) {
  .widget-info {
    &__item {
      flex-direction: column;
    }
    &__description {
      text-align: left;
    }
  }
}
</style>
