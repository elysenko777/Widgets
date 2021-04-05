<template lang="">
  <div>
    <div class="widget-info">
      <img :src="widgetIcon" class="widget-info__icon" alt="" title="" />
      <div>
        <div class="widget-info__top">
          <p class="widget-info__title">{{ title }}</p>
          <p class="widget-info__btn-list">
            <ShowDemoBtn :demoName="widgetTitle" />
          </p>
        </div>
        <p class="widget-info__description">{{ description }}</p>
      </div>
    </div>
    <WidgetDemo :demoName="widgetTitle" />
  </div>
</template>

<script>
import { toRefs } from "vue";
import WidgetDemo from "./demo";
import ShowDemoBtn from "./show-demo-btn";

export default {
  props: {
    title: String,
    description: String,
    icon: String
  },
  components: {
    WidgetDemo,
    ShowDemoBtn
  },
  setup: props => {
    const Props = toRefs(props);
    const icon = Props.icon.value;
    const title = Props.title.value;
    const widgetIcon = `/images/${icon}`;
    const widgetTitle = title.match("sticky") ? "sticky" : title;
    return {
      widgetIcon,
      widgetTitle
    };
  }
};
</script>

<style lang="scss">
@import "../../style/widgets/widget-item.scss";
</style>
