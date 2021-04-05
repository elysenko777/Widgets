<template lang="">
  <div class="widget-demo demo-body-simulator" v-if="hasBanner">
    <Countdown v-if="demoName === 'countdown'" />
    <Popup v-if="demoName === 'popup'" />
    <StickyPopup v-if="demoName === 'sticky'" />
  </div>
</template>

<script>
import Countdown from "./countdown/cowntdown";
import Popup from "./popup";
import StickyPopup from "./sticky-popup";
import { ref, watchEffect, toRefs } from "vue";
import store from "../../store/index";

export default {
  props: {
    demoName: String
  },
  components: {
    Countdown,
    Popup,
    StickyPopup
  },
  setup: props => {
    const hasBanner = ref();
    const Props = toRefs(props);
    const demoName = Props.demoName.value;
    const changeVisible = widgetName => {
      hasBanner.value = store.state.demo.visible[widgetName];
    };
    changeVisible(demoName);
    watchEffect(() => {
      changeVisible(demoName);
    });
    return {
      hasBanner
    };
  }
};
</script>
