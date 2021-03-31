<template lang="">
  <div class="countdown-data__timer">
    <TimerGroup :groupName="groupName" v-for="groupName in groupNameList" :key="groupName"/>
  </div>
</template>

<script>
import TimerGroup from "./timer-group";

export default {
  components: {
    TimerGroup
  },
  setup() {
    const groupNameList = ["days", "hours", "minutes", "seconds"];
    return {
      groupNameList
    }
  }
};
</script>

<style lang="scss">
.countdown-data__timer {
  display: flex;
  margin: 0px 5px;
  flex: 1.5 !important;
  justify-content: center;
  &-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    &:not(.seconds-group) {
      margin-right: 12px;
    }
    &-inner {
      display: flex;
    }
    &-label {
      color: #fff;
      font-size: small;
      margin-top: 3px;
    }
  }
  &-content {
    background: #fff;
    padding: 5px;
    border-radius: 4px;
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
  &-value {
    color: #000;
    font-weight: bold;
  }
}
</style>
