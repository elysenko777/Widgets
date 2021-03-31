<template lang="">
  <div
    class="countdown-data__timer-group"
    :class="groupClassName"
    v-if="hasTime"
  >
    <div class="countdown-data__timer-group-inner">
      <div
        class="countdown-data__timer-content"
        v-for="value in dateTimeValue"
        :key="value"
      >
        <span class="countdown-data__timer-value">{{ value }}</span>
      </div>
    </div>
    <div class="countdown-data__timer-group-label">{{ groupName }}</div>
  </div>
</template>

<script>
import store from "../../../store/index";
import { toRefs, ref, watchEffect } from "vue";

export default {
  props: {
    groupName: String
  },
  setup: props => {
    const groupName = toRefs(props).groupName.value;
    const dateTimeValue = ref();
    const hasTime = ref();
    hasTime.value = true;
    const groupClassName = `${groupName}-group`;
    const showTime = () => {
      const emptyTime = time => {
        return time
          .reduce((isTime, nextTime) => {
            return isTime.concat(nextTime);
          }, [])
          .every(item => item === 0);
      };
      const dateTime = store.getters.getDateTime.dateTime;
      const nameList = Object.keys(dateTime);
      const timeList = Object.values(dateTime);
      const timeIndex = emptyTime(dateTimeValue.value) && nameList.indexOf(groupName);
      if (timeIndex !== false) {
        const prevTime = timeList.slice(-timeList.length, timeIndex);
        hasTime.value = !emptyTime(prevTime);
      }
    };
    watchEffect(() => {
      dateTimeValue.value = store.getters.getDateTime.dateTime[groupName];
      showTime();
    });
    return {
      hasTime,
      dateTimeValue,
      groupClassName
    };
  }
};
</script>

<style lang=""></style>
