<template lang="">
  <ul class="widget-list">
    <li
      class="widget-item"
      v-for="widget in widgetInfoList"
      :class="widgetItemClass(widget.title)"
      :key="widget.id"
    >
      <WidgetItem
        :icon="widget.icon"
        :title="widget.title"
        :description="widget.description"
      />
    </li>
  </ul>
</template>

<script>
import widgetInfoList from "../../data/widgetInfoList";
import WidgetItem from "./widget-item";

export default {
  components: {
    WidgetItem
  },
  setup() {
    const widgetItemClass = title => `item-${title}`;
    return {
      widgetInfoList,
      widgetItemClass
    };
  }
};
</script>

<style lang="scss"></style>
