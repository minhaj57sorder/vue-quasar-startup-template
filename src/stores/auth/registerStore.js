import { defineStore } from 'pinia';
import { ref, reactive } from "vue";
import { camelCase, pascalCase } from "change-case";
import { CustomLoading } from 'src/utils/loding/loadiingApi';
import { useRouter } from 'vue-router';
import { Notify, useQuasar } from 'quasar';
import { api } from 'src/boot/axios';


export const useUserSigninStore = defineStore('user signin store', () => {
  const $q = useQuasar()
  const router = useRouter()
  const signUpUserInfo = reactive({
    fullName: '',
    email: '',
    password: '',
    password2: '',
  });
  const submitSignin = async () => {
    const config = {
      method: "post",
      url: "api/users/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: signUpUserInfo
    };
    CustomLoading('submitting-user-register').showLoading()
    CustomLoading('submitting-user-register').hideLoading()
    try {
      await api.request(config);
      setTimeout(() => {
        downloadApi(id)
        CustomLoading('submitting-user-register').hideLoading()
      }, 2000)
    } catch (error) {
      console.log(error)
      Notify.create({
        position: "center",
        type: "negative",
        message: "Couldn't sign up",
      });
      CustomLoading('submitting-user-register').hideLoading()
    }
  }
  return {
    signUpUserInfo,
    submitSignin,
  }

});
