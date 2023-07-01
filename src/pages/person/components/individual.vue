<template>
<uni-card class="center find-card flex-column-center" margin="0">
    <gb-avatar class="center-x"></gb-avatar>
    <div class="center mt20" style="width: fit-content; font-size: 50rpx;">{{ userStore.userName }}</div>
    <view class="flex-row-around mx40">
        <text class="text-color-purple" @click="changePage('login')"> 退出登录</text>
    </view>
</uni-card>
</template>

<script setup lang='ts'>
import { useUserStore } from '@/store/user';
import type { page} from '../type'
const emits = defineEmits<{
  (e: "changePage", from: page, to: page): void
}>()

const userStore = useUserStore()

// 页面跳转事件
function changePage(to: page) {
  userStore.initUser()
  emits("changePage", "individual", to)
}
</script>

<style lang='scss' scoped>

</style>