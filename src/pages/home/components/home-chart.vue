<template>
    <div ref="chart">

    </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts';
const chart = ref<any>(null)
function init() {
    var data = [70, 34, 60, 78, 69];
    var titlename = ["北方国际", "中天金融","新华联", "游族网络","南方国际",];
    var valdata = [1283, 796, 1234, 1111, 831];//这是干吗用的不清楚
    const option = {
        backgroundColor: '#fff',
        grid: {
            left: "20%",
            right: "10%",
            top:"4%",
            bottom: "15%",
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#7e7e7e',
            },


        }, {
            show: false,
            inverse: true,
            data: valdata,
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            zlevel: 2,
            data: data,
            barWidth: 25,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: '#919191',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: [690, '7px'],
                    formatter: '{c}%'
                }
            },
        }, {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: '#f1f1f1',

                    barBorderRadius: 30,
                }
            }
        },]
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
    height: 100%;
}
</style>