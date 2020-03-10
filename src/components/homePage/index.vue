<template>
  <div class="home-page">
    <div class="banner"></div>
    <div class="main-title">中视前卫资讯研究室 数据可视化分析</div>
    <div class="date-wrap">{{data.timeStamp | timeFilter}}</div>
    <div v-for="(item, index) in data.result" :key="index">
      <div class="title-wrap">
        <div>主题：{{item['主题']}}</div>
        <div class="detail-wrap">
          <div class="detail" @click="chekcDetail('e' + index)">
            <div class="detail-content">查看图表</div>
            <div :class="{'hide-content': checkArrow && currentID === 'e' + index}" :id="'e' + index">></div>
          </div>
          <div class="detail" @click="chekcDetail('c' + index)">
            <div class="detail-content">查看详情</div>
            <div :class="{'hide-content': checkArrow && currentID === 'c' + index}" :id="'c' + index">></div>
          </div>
        </div>
      </div>
      <echarts-component :data="item['媒体']" :id="'e' + index"></echarts-component>
      <collapse :data="item['媒体']" :id="'c' + index"></collapse>
    </div>
  </div>
</template>

<script>
import { data } from "./data/data";
import bus from "../../utils/eventBus";
import collapse from "./components/collapse";
import echartsComponent from "./components/echartsComponent";

export default {
  components: {
    collapse,
    echartsComponent
  },
  data() {
    return {
      data: [],
      currentID: null,
      checkArrow: false
    };
  },
  mounted() {
    this.data = data;
  },
  methods: {
    chekcDetail(id) {
      if (id !== this.currentID) {
        this.checkArrow = true
        this.currentID = id
      }
      else {
        this.checkArrow = !this.checkArrow
      }
      bus.$emit("checkDisplay", id);
    }
  },
  filters: {
    timeFilter(item) {
      if (typeof item === "undefined") {
        return item;
      } else {
        return item.split("+")[0];
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home-page {
  width: 100%;
}
.banner {
  height: 225px;
  width: 100%;
  background: url(../../../static/cctv_banner.jpg) no-repeat 50% 0;
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
.detail-wrap {
  display: flex;
  width: 200px;
  justify-content: space-between;
}
.detail {
  cursor: pointer;
  color: #1f3b7b;
  display: flex;
  justify-content: flex-end;
}
.detail:active {
  color: #6079b2;
}
.detail:hover {
  color: #8d0000;
}
.detail-content {
  margin-right: 5px;
}
.hide-content {
  transform: rotate(90deg);
}
</style>