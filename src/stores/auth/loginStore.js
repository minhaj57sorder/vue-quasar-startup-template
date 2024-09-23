import { defineStore } from 'pinia';
import { ref, reactive } from "vue";
import { camelCase, pascalCase } from "change-case";
import { CustomLoading } from 'src/utils/loding/loadiingApi';
import { useRouter } from 'vue-router';
import { Notify, useQuasar } from 'quasar';
import { api } from 'src/boot/axios';


export const useUserLoginStore = defineStore('user loging store', () => {
  const $q = useQuasar()
  const router = useRouter()
  const authUser = ref(null)
  const loginUserInfo = reactive({
    email: '',
    password: '',
  });
  const submitLogin = async () => {
    const config = {
      method: "post",
      url: "api/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: loginUserInfo
    };
    CustomLoading('submitting-user-login').showLoading()
    try {
      const response = await api.request(config);
      authUser.value = response.data
      sessionStorage.setItem('auth-user', JSON.stringify(response.data))
      router.push('/api-list')
      CustomLoading('submitting-user-login').hideLoading()
    } catch (error) {
      console.log(error)
      Notify.create({
        position: "center",
        type: "negative",
        message: "Couldn't log in",
      });
      CustomLoading('submitting-user-login').hideLoading()
    }
  }
  const checkLogin = async () => {
    if (authUser.value !== null) {
      return true
    }
    if (typeof(window) !== undefined) {
      const authuserdata = sessionStorage.getItem('auth-user')
      if (authuserdata !== undefined && authuserdata !== null) {
        authUser.value = JSON.parse(authuserdata)
        return true
      } else {
        return false
      }
    }
  }
  return {
    loginUserInfo,
    submitLogin,
    authUser,
    checkLogin
  }

});
