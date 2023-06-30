<template>
    <view>
        <view class="fix wd100 searchBar bg-white ">
            <uni-search-bar radius="5" placeholder="输入你想查询的公司名称" v-model="input" :clearButton="clearButton" :cancelButton="cancelButton"
            :cancelText = "cancelText"  @confirm=" emit('confirm') " @click="emit('click')" :focus="focus" />
        </view>
        <view style="height: 100rpx;"> </view>
    </view>
</template>

<script setup lang='ts'>
const {
    input,
    clearButton,
    cancelButton,
    cancelText,
    focus
} = withDefaults(defineProps<{
    input?: string,
    clearButton?: "auto" | "always" | "none",
    cancelButton?: "auto" | "always" | "none",
    cancelText?: string,
    focus?: boolean
}>(),{
    input: "",
    clearButton: "auto",
    cancelButton: "none",
    cancelText: "取消",
    focus: false
})

const emit = defineEmits<{
    (e: 'confirm'): void
    (e: 'click'): void
}>()
</script>

<style lang='scss' scoped>
.searchBar {
  top: 85rpx;
  z-index: 9999;
}
</style>