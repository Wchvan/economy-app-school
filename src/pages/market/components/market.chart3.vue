<template>
    <div ref="chart">

    </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts';
const chart = ref<any>(null)
function init() {
    const option = {
   backgroundColor: '#fff',
   title: {
      //   text: `{a|年度毛利及增速图}`,
        textStyle: {
            rich: {
                a: {
                    fontSize: 16,
                    fontWeight: 600,
                },
            },
        },
        top: '3%',
        left: '2%',
    },
    legend: {
        data: [],
        textStyle: {
            align: 'right',
        },
        top: '2%',
        right: '2%',
    },
   tooltip: {
      show:true,
      trigger: 'item',
      backgroundColor: 'rgba(255,255,255)',
      axisPointer: {
         lineStyle: {
            color: {
               type: 'linear',
               x: 0,
               y: 0,
               x2: 0,
               y2: 1,
               colorStops: [{
               offset: 0,
               color: '#A7D6FF'
               }, {
               offset: 0.5,
               color: '#fff',
               }, {
               offset: 1,
               color: '#A7D6FF'
               }],
               global: false
            }
         },
      }
   },
   grid: {
      top: '18%',
      left: '9%',
      right: '8%',
      bottom: '12%',
   },
   xAxis: [
      {
         type: 'category',
         data: ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年'] ,
         axisTick: {
            show: false // 是否显示坐标轴轴线
         },
         axisLabel: {
            color: '#282828',
            fontSize:14,
         },
         splitLine: {
            show: false
         },
         boundaryGap: true,
         axisLine: { //坐标轴轴线相关设置。
            show: true,
            inside: false,
            lineStyle: {
               color: '#000'
            }
         }
      },
   ],
   yAxis: [
      {
         type: 'value',
         min: 0,
         splitNumber: 6,
         axisLabel: { //坐标轴刻度标签的相关设置。
            show: true,
            textStyle: {
               color: '#737373',
               fontSize:14,
            }
         },
         axisLine: {
            show: true,
         },
         axisTick: {
            show: false,
         },
         splitLine: {
            show:true,
            lineStyle: {
               color: 'rgba(131,101,101,0.2)',
               type: 'dashed',
            }
         },
         show: true,
      },
      {
         type: "value",
         max: 50,
         nameTextStyle: {
            color: "#666666"
         },
         position: "right",
         axisLine: {
            lineStyle: {
               color: '#cdd5e2'
            }
         },
         splitLine: {
            show: false,
         },
         axisLabel: {
            show: true,
            formatter: "{value} %", //右侧Y轴文字显示
            textStyle: {
               color: "#666666",
               fontSize:14,
            }
         }
      }
   ],
   series: [
      {
         name: '毛利（亿元）',
         type: 'bar',
         barMaxWidth: 20,
         zlevel: 10,
         // barGap: '100%',
         data: [844.99, 1169.25, 1421.2,1675.33, 2215.32, 2459.44],
         itemStyle: {
            normal: {
               color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                     offset: 0,
                     color: '#4F93FE' 
                  }, {
                     offset: 1,
                     color: '#A7D6FF' 
                  }]
               },
               barBorderRadius: [30, 30, 0, 0],
               label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: {
                     //数值样式
                     color: '#3b6ebf',
                     fontSize: 12,
                     fontWeight: 400,
                  },
               },
            }
         },
      },
      {
         name: '总额数',
         type: 'bar',
         itemStyle: {
            normal: {
               color: '#E9E9E9',
            }
         },
         silent: true,
         barWidth: 30,
         barGap: '-125%',
         data: [875, 1200, 1450,1700, 2240, 2485]
      },
      {
         name: "增速",
         type: "line",
         zlevel: 11,
         yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
         smooth: true, //平滑曲线显示
         symbol: "circle", //标记的图形为实心圆
         symbolSize: 8, //标记的大小
         itemStyle: {
            normal: {
               color: '#ffa43a',
               borderColor: 'rgba(255, 234, 0, 0.5)',  //圆点透明 边框
               borderWidth: 7,
               label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: {
                     //数值样式
                     color: '#915c1e',
                     fontSize: 12,
                     fontWeight: 400,
                  },
                  formatter: function (res:any) {
                     if (res.value) {
                        return res.value + '%'
                     } else {
                        return 0
                     }
                  },
               },
            },
         },
         lineStyle: {
            color: "#ffa43a"
         },
         data: [null, 38.37, 21.55, 17.88, 32.23, 11.02]
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
    height: 100%;
}
</style>