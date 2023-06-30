<template>
    <text class="tab-item" @click="handleClick"
    :class="[props.active ? 'is-active' : '']"
    :style="{
        fontSize: props.active ?  props.activeFontSize :props.fontSize ,
        margin: props.margin
    }">
        <slot></slot>
    </text>
</template>

<script setup lang='ts'>
const props = withDefaults(defineProps<{
    fontSize?: string,
    margin?: string,
    active: boolean,
    value: string | number,
    activeFontSize?: string
}>(), {
    fontSize: "30rpx",
    margin: "0rpx",
    active: false,
    value: 0,
    activeFontSize: '36rpx'
})

const emit = defineEmits<{
    (e: "click", value?: string|number): void
}>()

// 点击事件
function handleClick() {
    emit("click", props.value)
}

</script>

<style lang='scss' scoped>
.tab-item {
    padding: 20rpx;
    box-sizing: border-box;
    white-space: nowrap;
}

.is-active {
    padding-top: 10rpx;
    color: $red-color;
    font-weight: 800;
    border-bottom:2px solid #A52A2A ;
}
</style>