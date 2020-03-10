<template>
  <div class="echarts-component">
    <div v-show="display">
      <div ref="echart" class="chart-wrap"></div>
    </div>
  </div>
</template>

<script>
import bus from "../../../utils/eventBus";
import echarts from "echarts";

export default {
  components: {},
  props: {
    data: {
      default: () => [],
      required: false
    },
    id: {
      required: false,
      default: null
    }
  },
  data() {
    return {
      display: false,
      myChart: null
    };
  },
  mounted() {
    bus.$on("checkDisplay", target => {
      if (target === this.id) {
        this.display = !this.display;
      } else {
        this.display = false;
      }
    });
    this.drawChart();
  },
  methods: {
    drawChart() {
      this.myChart = echarts.init(this.$refs.echart);

      let media = [];

      for (let i = 0; i < this.data.length; i++) {
        media.push({
          value: this.data[i]["报道量"],
          name: this.data[i]["名称"]
        });
      }

      this.myChart.setOption(
        {
          title: {
            text: "媒体报道量占比统计",
            x: "center",
            y: "top",
            textAlign: "left"
          },
          tooltip: {
            show: true
          },

          series: [
            {
              name: "媒体报道量占比统计",
              type: "pie",
              labelLine: {
                show: false
              },
              lable: {
                show: false
              },

              data: media,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                },
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }
          ]
        },
        true
      );
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.hide-content {
  transform: rotate(90deg);
}
.chart-wrap {
  height: 400px;
  width: 400px;
  margin-top: 20px;
}
</style>