<template>
  <uni-card class="center login-card flex-column-center" margin="0">
    <gb-avatar class="center-x"></gb-avatar>
    <uni-forms :modelValue="formData" :rules="formRules" ref="form" err-show-type="toast" class="mt40">
      <uni-forms-item required label="账号" name="userName" :class="formItemStatus.userName">
        <uni-easyinput type="text" v-model="formData.userName" placeholder="请输入账号" :inputBorder="false"
          @focus="handleFocus('userName')" @blur="handleBlur('userName')" />
      </uni-forms-item>
      <uni-forms-item required name="password" label="密码" :class="formItemStatus.password" err-show-type="toast">
        <uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" :inputBorder="false"
          :passwordIcon="false" @focus="handleFocus('password')" @blur="handleBlur('password')" />
      </uni-forms-item>
    </uni-forms>
    <button type="primary" @click="submit" :loading="loading">登录</button>
    <view class="flex-row-around mx40">
      <text class="text-color-purple" @click="changePage('register')"> 注册 </text>
      <text class="text-color-purple" @click="changePage('findPass')"> 找回密码 </text>
    </view>
  </uni-card>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
import type { page, loginLabel, loginForm, loginInputStatus, errMsg } from '../type'
import { status } from '../type'

const userStore = useUserStore()

const form = ref(null) as any
// 接收页面跳转函数
const emits = defineEmits<{
  (e: "changePage", from: page, to: page): void
}>()
// 表单变量和检验方式
const formData: loginForm = reactive({
  userName: "",
  password: ""
})
const formRules = {
  userName: {
    rules: [{
      required: true,
      errorMessage: "请输入账号",
    }
    ]
  },
  password: {
    rules: [{
      required: true,
      errorMessage: "请输入密码",
    }]
  }
}

// 表单聚焦失焦事件
const formItemStatus: loginInputStatus = reactive(
  {
    userName: status.blur,
    password: status.blur
  }
)
function handleFocus(item: loginLabel) {
  formItemStatus[item] = status.focus
}
function handleBlur(item: loginLabel) {
  form.value.validateField([item], (err: errMsg, formData: loginForm) => {
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
  form.value.validate((err: errMsg, formData: loginForm) => {
    if (!err) {
      loading.value = true
      userStore.login(formData).then(res => {
        loading.value = false
        if (res.code !== 200) {
          uni.showToast({
            title: res.msg,
            icon: 'none',
          })
        } else {
          emits("changePage", "login", "individual")
        }
      })
    }
  })
}

// 页面跳转事件
function changePage(to: page) {
  emits("changePage", "login", to)
}
</script>

<style lang="scss" scoped>
.login-card {
  width: 650rpx;
  margin: 0;
}
</style>
