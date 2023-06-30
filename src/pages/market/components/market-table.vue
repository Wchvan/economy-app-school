<template>
    <uni-table border stripe emptyText="暂无更多数据" class="mt20">
        <!-- 表头行 -->
        <uni-tr>
            <uni-th align="center">项目</uni-th>
            <uni-th align="center">数值</uni-th>
        </uni-tr>
        <!-- 表格数据行 -->
        <uni-tr v-for="(item, index) in props.tableData" :key="index">
            <uni-td align="center" >{{index}}</uni-td>
            <uni-td align="center" >{{item}}</uni-td>
        </uni-tr>
    </uni-table>
</template>

<script setup lang='ts'>
const props = defineProps<{
    tableData : Object
}>()
console.log(props.tableData)
</script>

<style lang='scss' scoped></style>