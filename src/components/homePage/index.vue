<template>
  <div class="home-page">
    <div class="main-title">中视前卫资讯研究室 数据可视化分析</div>
    <div class="date-wrap">
      {{data.timeStamp | timeFilter}}
    </div>
    <div v-for="(item, index) in data.result" :key="index">
      <div class="title-wrap">
        <div>主题：{{item['主题']}}</div>
      </div>      
      <collapse :data="item['媒体']"></collapse>
    </div>
  </div>
</template>

<script>
import { data } from "./data/data";
import collapse from "./components/collapse";

export default {
  components: {
    collapse
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.data = data;
  },
  methods: {},
  filters: {
    timeFilter (item) {
      return item.split('+')[0]
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home-page {
  width: 100%;
}
.main-title {
  font-size: 38px;
  color: #4d4f53;
  font-weight: bold;
  height: 134px;
  line-height: 134px;
}
.title-wrap {
  display: flex;
  height: 30px;
  width: 880px;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}
.date-wrap {
  height: 65px;
  line-height: 65px;
  font-size: 16px;
  color: #888;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 20px;
}
.detail {
  cursor: pointer;
  color: #1f3b7b;
}
.detail:active {
  color: #6079b2;
}
.detail:hover {
  color: #8d0000;
  text-decoration: underline;
}
</style>