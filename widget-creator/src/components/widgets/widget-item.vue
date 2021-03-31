<template lang="">
  <div>
    <div class="widget-info">
      <img :src="widgetIcon" class="widget-info__icon" alt="" title="" />
      <div>
        <div class="widget-info__top">
          <p class="widget-info__title">{{ title }}</p>
          <p class="widget-info__btn-list">
            <span
              class="widget-info__btn btn-show-demo"
              @click="showBanner"
              v-if="hideDemo"
              title="Просмотр демо"
            >
            </span>
            <span
              class="widget-info__btn btn-add-widget"
              title="Добавить"
              v-if="doneAddingForm"
            >
            </span>
          </p>
        </div>
        <p class="widget-info__description">{{ description }}</p>
      </div>
    </div>
    <WidgetDemo :demoName="title" />
  </div>
</template>

<script>
import { toRefs, ref, watchEffect } from "vue";
import WidgetDemo from "./demo";
import store from "../../store/index";

export default {
  props: {
    title: String,
    description: String,
    icon: String
  },
  components: {
    WidgetDemo
  },
  setup(props) {
    const widgetProps = toRefs(props);
    const icon = widgetProps.icon.value;
    const title = widgetProps.title.value;
    const widgetIcon = `/images/${icon}`;
    const widgetTitle = title.match("sticky") ? "sticky" : title;
    const doneAddingForm = false;
    const hideDemo = ref();
    hideDemo.value = !store.state.demo.visible[widgetTitle];
    const showBanner = () => {
      store.dispatch("showDemo", widgetTitle);
    };
    watchEffect(() => {
      hideDemo.value = !store.state.demo.visible[widgetTitle];
    });
    return {
      widgetIcon,
      showBanner,
      doneAddingForm,
      hideDemo
    };
  }
};
</script>

<style lang="scss">
.widget-info {
  display: flex;
  padding: 15px 10px;
  align-items: center;
  p {
    padding: 0px;
  }
  &__list {
    display: flex;
    flex-direction: column;
  }
  &__icon {
    width: 90px;
    height: 90px;
    padding: 0px 35px 0px 20px;
  }
  &__top {
    display: flex;
    margin-bottom: 5px;
  }
  &__title {
    display: inline;
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 20px;
    line-height: 1;
  }
  &__btn {
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &:hover {
      zoom: 1.2;
      left: -2px;
    }
    &-list {
      display: inline-flex;
      position: relative;
      align-items: center;
      text-align: right;
    }
    &.btn {
      &-show-demo {
        position: absolute;
        margin-right: 6px;
        width: 26px;
        background: {
          image: url("/images/show-demo.png");
          size: contain;
          repeat: no-repeat;
        }
      }
      &-add-widget {
        background: {
          image: url("/images/add-widget.png");
          size: contain;
          repeat: no-repeat;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .widget-info {
    flex-direction: column;
    &__icon {
      margin-bottom: 20px;
    }
    &__description {
      text-align: left;
    }
  }
}
</style>
