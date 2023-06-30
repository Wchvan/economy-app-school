<template>
  <uni-card class="center find-card flex-column-center" margin="0">
    <gb-avatar class="center-x"></gb-avatar>
    <uni-forms :modelValue="formData" :rules="formRules" ref="form" err-show-type="toast" class="mt40">
      <uni-forms-item required label="账号" name="userName" :class="formItemStatus.userName">
        <uni-easyinput type="text" v-model="formData.userName" placeholder="请输入账号" :inputBorder="false"
          @focus="handleFocus('userName')" @blur="handleBlur('userName')" />
      </uni-forms-item>
      <uni-forms-item required label="邮箱" name="email" :class="formItemStatus.email" class="emailItem">
        <uni-easyinput type="text" v-model="formData.email" placeholder="请输入邮箱" :inputBorder="false"
          @focus="handleFocus('email')" @blur="handleBlur('email')" />
      </uni-forms-item>
    </uni-forms>
    <button type="primary" @click="submit" :loading="loading">找回密码</button>
    <view class="flex-row-around mx40">
      <text class="text-color-purple" @click="changePage('login')"> 返回登录界面 </text>
      <text class="text-color-purple" @click="changePage('register')"> 注册 </text>
    </view>
  </uni-card>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
import type { page, findPassLabel, findPassForm, findPassInputStatus, errMsg } from '../type'
import { status } from '../type'

const userStore = useUserStore()

const form = ref(null) as any
// 接收页面跳转函数
const emits = defineEmits<{
  (e: "changePage", from: page, to: page): void
}>()
// 表单变量和检验方式
const formData: findPassForm = reactive({
  userName: "",
  email: ""
})
const formRules = {
  userName: {
    rules: [{
      required: true,
      errorMessage: "请输入账号",
    }
    ]
  },
  email: {
    rules: [{
      required: true,
      errorMessage: "请输入邮箱",
    }, {
      pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      errorMessage: "请输入正确的邮箱格式"
    }]
  },
}

// 表单聚焦失焦事件
const formItemStatus: findPassInputStatus = reactive(
  {
    userName: status.blur,
    email: status.blur
  }
)
function handleFocus(item: findPassLabel) {
  formItemStatus[item] = status.focus
}
function handleBlur(item: findPassLabel) {
  form.value.validateField([item], (err: errMsg, formData: findPassForm) => {
    if (err) {
      formItemStatus[item] = status.err
    } else {
      formItemStatus[item] = status.blur
    }
  })
}

// 表单提交事件
const loading = ref<boolean>(false)
function submit() {
  form.value.validate((err: errMsg, formData: findPassForm) => {
    if (!err) {
      loading.value = true
      userStore.findPass(formData).then(res => {
        if (res.code !== 200) {
          uni.showToast({
            title: res.msg,
            icon: 'none',
          })
        } else {
          emits("changePage", "findPass", "individual")
        }
      })
    }
  })
}

// 页面跳转事件
function changePage(to: page) {
  emits("changePage", "findPass", to)
}
</script>

<style lang="scss" scoped>
.find-card {
  width: 650rpx;
  margin: 0;
}
</style>
