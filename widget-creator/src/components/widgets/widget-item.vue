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
@import "../../style/widget-item.scss";
</style>
