<template>
    <div ref="chart">

    </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts';
const props = defineProps<{
    title: string 
}>()

const title = ref<string>(`${props.title}公司自控专项收入分布`)
const chart = ref<any>(null)
function init() {
    const option = {
        backgroundColor: "#fff",
        title: {
            text: title.value,
            textStyle:
                { fontSize: 15 },
            subtext: '单位：万元',
            x: '20%',
        },
        grid: {
            left: "10%",
            right: "10%",
            bottom: "15%",
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ['#8fc31f', '#f35833', '#00ccff', '#ffcc00', '#045FB4', '#FF8000'],
        legend: {
            orient: 'vertical',
            x: 'right',
            y: '10%',
            data: ['配网线路清理', '设备隐患治理及反措执行', '运维环境治理', '安防消防运维', '新技术研究与应用', '配电自动化运维'],
            formatter: function (name:any) {
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
                for (var i = 0; i < option.series[0].data.length; i++) {
                    if (name == oa[i].name) {
                        return name;
                    }
                }
            }
        },
        series: [
            {
                name: '自控专项成本',
                type: 'pie',
                radius: '55%',
                center: ['40%', '45%'],
                data: [
                    { value: 3000, name: '配网线路清理' },
                    { value: 3650, name: '设备隐患治理及反措执行' },
                    { value: 753, name: '运维环境治理' },
                    { value: 673, name: '安防消防运维' },
                    { value: 248, name: '新技术研究与应用' },
                    { value: 934, name: '配电自动化运维' }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label: {
                            textStyle: { fontSize: 16 },
                            show: false,
                            //	                            position:'inside',
                            formatter: '{b} : {c} ({d}%)'
                        }
                    },
                    labelLine: { show: false }
                }
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
watch(()=>props.title, (newVal)=>{
    title.value = `${newVal}公司自控专项收入分布`
    init()
})
</script>

<style lang='scss' scoped>
div {
    width: 100%;
    height: 100%;
}
</style>