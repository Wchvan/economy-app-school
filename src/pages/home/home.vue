<template>
  <gb-search @click="goSearch"></gb-search>
  <view>
    <swiper :current="current" :indicatorDots="true" class="mx10" style="height: 400rpx;"
    :autoplay="true" :interval="2000">
    <!-- :class="item.colorClass"  -->
      <swiper-item v-for="(item, index) in swiper" :key="index" class="swiperItem"> 
        <uni-link :href="item.url" :showUnderLine="false">
          <image :src="imgArr[index]" style="position: absolute; width: 100%; height: 100%; z-index: -1;"></image>
          <view class="centerX text-center" style="background-color: rgba(128, 128, 128,0.5);position: absolute; bottom: 0; width: 100%;">
            <text style="color: #fff;">{{ item.content }}</text>
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
  <gb-section class="mx10 " :title="'🧷企业推荐指数'" >
    <div class="chart mx10 mb20">
        <homeChart ></homeChart>
    </div>
  </gb-section>
</template>

<script setup lang="ts">
import type { swiperDataType, infoDataType } from './type'
import { swiperData, infoData } from "@/mock/home"
import img0 from '@/static/slider/0.jpg'
import img1 from '@/static/slider/1.jpg'
import img2 from '@/static/slider/2.jpg'
import homeChart from './components/home-chart.vue'

const imgArr = [img0,img1,img2]

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
.chart {
	width: 730rpx;
	height: 500rpx;
}
</style>
