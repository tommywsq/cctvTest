<template>
  <div class="collapse-wrap">
    <div class="detail" @click="chekcDetail">
      <div class="detail-content">查看详情</div>
      <div :class="{'show-content': !dispaly, 'hide-content': display}">></div>
    </div>

    <div v-show="display">
      <div v-for="(item, index) in data" :key="index" class="collapse-item">
        <div class="collapse-item-title">
          <div class="collapse-item-title-name">媒体名称：{{item['名称']}}</div>
          <div>报道量：{{item['报道量']}}</div>
        </div>

        <div v-for="(item1, index1) in item['标题']" :key="index1" class="collapse-item-info">
          <div class="collapse-item-info-content" :title="item1.title">{{item1.title}}</div>
          <div>{{item1.published | timeFilter}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../../utils/eventBus";
export default {
  components: {},
  props: {
    data: {
      default: [],
      required: false
    },
    id: {
      required: false,
      default: null
    }
  },
  data() {
    return {
      display: false
    };
  },
  mounted() {
    bus.$on("checkDisplay", target => {
      if (target === this.id) {
        this.display = !this.display
      }
      else {
        this.display = false
      }
    });
  },
  methods: {
    chekcDetail() {
      bus.$emit("checkDisplay", this.id);

    }
  },
  filters: {
    timeFilter(item) {
      return item.split("+")[0];
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.detail {
  cursor: pointer;
  color: #1f3b7b;
  margin-top: -35px;
  margin-bottom: 10px;
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
.collapse-wrap {
  width: 100%;
  padding: 10px;
}
.collapse-item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-top: 1px solid #ebeef5;
}
.collapse-item-title-name {
  margin-right: 20px;
}
.collapse-item-title {
  display: flex;
  font-size: 15px;
}
.collapse-item-info {
  display: flex;
  justify-content: space-between;
  width: 840px;
  padding: 10px;
  font-size: 14px;
}
.collapse-item-info-content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 645px;
}
.collapse-item:nth-child(odd) {
  background: #fafafa;
}
.collapse-item:nth-child(even) {
  background: #fff;
}
</style>