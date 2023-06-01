<template>
  <div class="app">
    <router-view class="full-size-percents"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: $base-font-family;
  font-size: $base-font-size;
}

.full-size-percents{
  min-width: 100%;
  min-height: 100%;
}
</style>
