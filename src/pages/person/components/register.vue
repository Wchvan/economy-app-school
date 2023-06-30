<template>
    <uni-card class="center register-card flex-column-center" margin="0">
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
            <uni-forms-item required name="checkPass" label="确认密码" :class="formItemStatus.checkPass" err-show-type="toast"
                :label-width="100">
                <uni-easyinput type="password" v-model="formData.checkPass" placeholder="确认密码" :inputBorder="false"
                    :passwordIcon="false" @focus="handleFocus('checkPass')" @blur="handleBlur('checkPass')" />
            </uni-forms-item>
            <uni-forms-item required label="邮箱" name="email" :class="formItemStatus.email" class="emailItem">
                <uni-easyinput type="text" v-model="formData.email" placeholder="请输入邮箱" :inputBorder="false"
                    @focus="handleFocus('email')" @blur="handleBlur('email')" />
            </uni-forms-item>
            <text :class=" emailBtnStyle  " @click="getCode" class="emailBtn">
                {{ emailBtnString }}
            </text>
            <uni-forms-item required label="验证码" name="code" :class="formItemStatus.code">
                <uni-easyinput type="text" v-model="formData.code" placeholder="请输入验证码" :inputBorder="false"
                    @focus="handleFocus('code')" @blur="handleBlur('code')" />
            </uni-forms-item>
        </uni-forms>
        <button type="primary" @click="submit" :loading="loading">注册</button>
        <view class="flex-row-around mx40">
            <text class="text-color-purple" @click="changePage('login')"> 返回登录界面 </text>
            <text class="text-color-purple" @click="changePage('findPass')"> 找回密码 </text>
        </view>
    </uni-card>
</template>
  
<script setup lang="ts">
import { useUserStore } from '@/store/user'
import type { page, registerLabel, registerForm, registerInputStatus, errMsg } from '../type'
import { status } from '../type'
const userStore = useUserStore()
const form = ref(null) as any

// 接收页面跳转函数
const emits = defineEmits<{
    (e: "changePage", from: page, to: page): void
}>()

// 表单变量和检验方式

const formData: registerForm = reactive({
    userName: "",
    password: "",
    checkPass: "",
    email: "",
    code: "",
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
        }, {
            pattern: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^\da-zA-Z\s]).{6,12}$/,
            errorMessage: "请输入6到12位且包含数字、英文和特殊字符的密码"
        }]
    },
    checkPass: {
        rules: [{
            required: true,
            errorMessage: "请输入密码",
        }, {
            validateFunction: function (rule: unknown, value: string, data: registerForm, callback: Function) {
                if (value !== data["password"]) {
                    callback("请确认密码是否相同")
                }
            }
        }]
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
    code: {
        rules: [{
            required: true,
            errorMessage: "请输入验证码",
        }, {
            validateFunction: function (rule: unknown, value: string, data: registerForm, callback: Function) {
                if (value !== userStore.code) {
                    callback("验证码错误")
                }
            }
        }]
    }
}

// 表单聚焦失焦事件
const formItemStatus: registerInputStatus = reactive(
    {
        userName: status.blur,
        password: status.blur,
        checkPass: status.blur,
        email: status.blur,
        code: status.blur
    }
)
function handleFocus(item: registerLabel) {
    formItemStatus[item] = status.focus
}
function handleBlur(item: registerLabel) {
    form.value.validateField([item], (err: errMsg, formData: registerForm) => {
        if (err) {
            formItemStatus[item] = status.err
        } else {
            formItemStatus[item] = status.blur
        }
    })
}

// 验证码按钮
const emailBtnFlag = ref<boolean>(false)
const emailBtnStyle = ref<"emailBtnAcitve" | "">("")
watch(emailBtnFlag, (newVal)=>{
     if(newVal) {
        emailBtnStyle.value = "emailBtnAcitve"
     } else {
        emailBtnStyle.value = ""
     }
})
const emailBtnString = ref<string>("发送验证码")
watch(() => formData.email, (newVal: string) => {
    const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (reg.test(newVal)) {
        emailBtnFlag.value = true
    } else {
        emailBtnFlag.value = false
    }
})
function getCode() {
    if (emailBtnFlag.value) {
        emailBtnFlag.value = false
        let num = 60
        emailBtnString.value = `${num--}后可重新发送`
        userStore.getCheckCode({ email: formData.email })
        const timer = setInterval(() => {
            emailBtnString.value = `${num--}后可重新发送`
            if (num < 0) {
                emailBtnFlag.value = true
                clearInterval(timer)
                emailBtnString.value = "发送验证码"
            }
        }, 1000)
    }
}

// 表单提交事件
const loading = ref<boolean>(false)
function submit() {
    form.value.validate((err: errMsg, formData: registerForm) => {
        if (!err) {
            const inputForm = {
                userName: formData.userName,
                password: formData.password,
                email: formData.email
            }
            loading.value = true
            userStore.register(inputForm).then(res => {
                loading.value = false
                if (res.code !== 200) {
                uni.showToast({
                    title: res.msg,
                    icon: 'none',
                })
                } else {
                    emits("changePage", "register", "individual")
                }
            })
        }
    })
}

// 页面跳转事件
function changePage(to: page) {
    emits("changePage", "register", to)
}
</script>
  
<style lang="scss" scoped>
.register-card {
    width: 650rpx;
    margin: 0;
}

.emailItem {
    margin-bottom: 0;
}

.emailBtn {
    font-size: 25rpx;
    display: block;
    margin: 20rpx 0;
    text-align: end;
    color: $gray-color;
}

.emailBtnAcitve {
    color: $blue-color;
}
</style>
  