<template>
    <view :class="[props.type, props.size]" :style="{
            width: props.width ? `${props.width}rpx` : '',
            height: props.height ? `${props.height}rpx` : ''
        }">
        <img :src="src" >
    </view>
</template>

<script setup lang="ts">
import img from '@/static/avatar.png'
const props = withDefaults(defineProps<{
    src?: string,
    type?: "circle" | "" | "rect",
    width?: number,
    height?: number,
    size?: "default" | "mini" | "large" | "middle"
}>(), {
    src: img,
    type: "circle",
    size: "default"
})
</script>

<style scoped lang="scss">
img {
    width: 100%;
    height: 100%;
}

.circle {
    border-radius: 50%;
}

.default,
.middle {
    width: 200rpx;
    height: 200rpx;
}

.mini {
    width: 150rpx;
    height: 150rpx;
}

.large {
    width: 300rpx;
    height: 300rpx;
}
</style>