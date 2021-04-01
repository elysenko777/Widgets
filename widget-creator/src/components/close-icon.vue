<template lang="">
  <div class="close-icon">
    <span></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.close-icon {
  color: #fff;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  span {
    position: relative;
    width: 15px;
    height: 15px;
    display: block;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
      left: 50%;
      width: 1px;
      height: 15px;
      background: #fff;
    }
    &::before {
      transform: rotate(-45deg);
    }
    &::after {
      transform: rotate(45deg);
    }
  }
}
</style>
