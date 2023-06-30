<template>
    <view class="mx10 mt40">
        <view class="title pb20 mt10 flex-row">
            <text :style="{fontSize:props.titleFontSize,color: props.color}" class="tit">{{ props.title }}</text>
            <uni-icons v-if="trash" custom-prefix="iconfont" type="icon-lajixiang" :size="trashSize"></uni-icons>
            <text v-else :style="{fontSize:props.rightFontSize,color: props.rightColor }">{{ props.rightTit }}</text>
        </view>
        <view class="content" :style="{border:props.borderStyle, backgroundColor:props.backgroundColor}">
            <slot></slot>
        </view>
    </view>
</template>

<script setup lang='ts'>
const props = withDefaults(defineProps<{
    title: string,
    rightTit?: string,
    titleFontSize?: string,
    color?: string,
    rightFontSize?: string,
    rightColor?: string,
    borderStyle?: string,
    backgroundColor?: string,
    trash?: boolean,
    trashSize?: number
}>(), {
    title: "",
    rightTit: "更多>",
    titleFontSize: "36rpx",
    color: "#409eff",
    rightFontSize: "20rpx",
    rightColor: "#CFCFCF",
    borderStyle: "1px solid #fff",
    backgroundColor: "#fff",
    trash: false,
    trashSize: 20
})
</script>

<style lang='scss' scoped>
@import "@/static/iconfont.css";
.tit{
    margin-right: auto;
    font-weight: 1000;
}
.content{
    padding: 10rpx;
}
</style>
