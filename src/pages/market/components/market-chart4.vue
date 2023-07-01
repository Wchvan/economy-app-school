<template>
    <div ref="chart">

    </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts';
const chart = ref<any>(null)
function init() {
    const option = {
        backgroundColor: "#fff",
        title: {
            text: '盈利情况',
            textStyle: {
                fontSize: 22
            }
        },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330],
      type: 'line',
      smooth: true
    }
  ]
};



    let mychart = echarts.init(chart.value)
    mychart.setOption(option)
    window.addEventListener("resize", function () {
        mychart.resize();
    });
}
onMounted(() => {
    init()
})
</script>

<style lang='scss' scoped>
div {
    width: 100%;
    height: 80%;
}
</style>