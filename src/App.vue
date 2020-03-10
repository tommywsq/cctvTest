<template>
  <div id="app" style="height: 100%;">
    <div class="main-wrap">

      <div class="main-wrap">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  mounted() {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#app {
  display: flex;
  justify-content: center;
}
.main-wrap {
  width: 880px;
}

</style>
