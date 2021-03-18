<template lang="">
    <div class="widget-list__info">
        <img :src={{ iconPath }} class="widget-info__icon" alt="" title=""/>
                <div>
                    <p class="widget-info__title">{{ title }}</p>
                    <p class="widget-info__description">{{ description }}</p>
                    <p class="widget-info__btn">
                        <span class="widget-info__btn-add-widget"> Добавить + </span>
                    </p>
                </div>
    </div>
</template>

<script>
export default {
  props: {
    item
  },
  setup(props) {
    const { icon, title, description } = props.item;  
    const iconPath = `/images/${icon}`;
    return {
      iconPath,
      title,
      description
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
      cursor: pointer;
    }
  }
}
</style>
