<template lang="">
  <div class="countdown-data__timer">
    <TimerGroup
      :groupName="groupName"
      v-for="groupName in groupNameList"
      :key="groupName"
    />
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
    };
  }
};
</script>

<style lang="scss"></style>
