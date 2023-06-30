<template>
    <view class="tab" :class="[mode]" :current="props.current"
    :style="{
        padding:props.padding,
        backgroundColor:props.backgroundColor,
    }">
        <slot></slot>
    </view>
</template>

<script setup lang='ts'>
const props = withDefaults(defineProps<{
    mode?: "horizonal" | "vertical",
    padding?: string,
    backgroundColor?: string,
    current: string | number
}>(),{
    mode: "horizonal",
    padding: "20rpx",
    backgroundColor: "#fff",
    current: 0
})
</script>

<style lang='scss' scoped>
.tab{
    display: flex;
    justify-content: space-between;
    overflow: auto;
}
::-webkit-scrollbar{
    width: 0;
    height: 0;
}
.horizontal{
    flex-direction: row;
    height: 80rpx;
}
.vertical{
    flex-direction: column;
}
</style>