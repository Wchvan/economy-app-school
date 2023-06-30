import { defineStore } from 'pinia'
import UserService from '@/api/user'
import type {
  codeParm,
  findPassParm,
  loginParm,
  registerParm,
  tokenParm,
} from '@/interface/person/api'

export const useUserStore = defineStore(
  'user',
  () => {
    const userName = ref<string>('')
    const code = ref<string>('')
    const token = ref<string>('')

    const initUser = () => {
      userName.value = ''
      token.value = ''
      code.value = ''
    }

    const login = async (param: loginParm) => {
      const res = await UserService.login(param)
      if (res.code === 200) {
        userName.value = param.userName
      }
      return res
    }

    const register = async (params: registerParm) => {
      const res = await UserService.register(params)
      if (res.code === 200) {
        userName.value = res.data.token
      }
      return res
    }

    const getCheckCode = async (params: codeParm) => {
      const res = await UserService.code(params)
      if (res.code === 200) {
        code.value = res.data.code
      }
      return res
    }

    const updateToken = async () => {
      const res = await UserService.token({token:token.value})
      if (res.code === 200) {
        token.value = res.data.token
      } else {
        initUser()
      }
      return res
    }

    const findPass = async (params: findPassParm) => {
      const res = await UserService.findPass(params)

      return res
    }

    return {
      userName,
      code,
      token,
      initUser,
      login,
      register,
      getCheckCode,
      updateToken,
      findPass,
    }
  },
  {
    persist: {
      storage: {
        setItem: uni.setStorageSync,
        getItem: uni.getStorageSync,
      },
      key: 'userInfo', //设置存储的key
      paths: ['userName', 'token'], //指定要长久化的字段
    },
  },
)
