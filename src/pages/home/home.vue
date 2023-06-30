<template>
  <gb-search @click="goSearch"></gb-search>
  <view>
    <swiper :current="current" :indicatorDots="true" class="mx10"
    :autoplay="true" :interval="2000">
      <swiper-item v-for="(item, index) in swiper" :key="index" :class="item.colorClass" class="swiperItem">
        <uni-link :href="item.url" :showUnderLine="false">
          <view class="center text-center">
            <text class="">{{ item.content }}</text>
          </view>
        </uni-link>
      </swiper-item>
    </swiper>
  </view>
  <gb-section class="mx10 " :title="'🧷企业快讯'" >
    <ul class="flex-column">
      <uni-link v-for="(item, index) in info" :href="item.url" :color="'#000'" :showUnderLine="false" class="pb20 infoLink">
        ⭕{{ item.tit }}
      </uni-link>
    </ul>
  </gb-section>
</template>

<script setup lang="ts">
import type { swiperDataType, infoDataType } from './type'
import { swiperData, infoData } from "@/mock/home"

function goSearch () {
  uni.navigateTo({
    url: "/pages/search/search"
  })
}

// 轮播图
const current = ref<number>(0)
const swiper = ref<swiperDataType>(swiperData)


// 资讯
const info = ref<infoDataType>(infoData)
</script>

<style scoped lang="scss">

.swiperItem {
  border-radius: 30rpx;
}
.infoLink{
  font-size:26rpx !important ;
  font-weight: 500;
  line-height: 40rpx;
}
</style>
