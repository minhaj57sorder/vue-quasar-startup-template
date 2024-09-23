import { defineStore } from 'pinia';
import { ref, reactive } from "vue";
import { camelCase, pascalCase } from "change-case";
import { CustomLoading } from 'src/utils/loding/loadiingApi';
import { useRouter } from 'vue-router';
import { Notify, useQuasar } from 'quasar';
import { api } from 'src/boot/axios';


export const usePasswordRecoveryStore = defineStore('password recovery store', () => {
  const $q = useQuasar()
  const router = useRouter()
  const passwordRecoveryInfo = reactive({
    email: '',
  });
  const submitPasswordRecovery = async () => {
    const config = {
      method: "post",
      url: "api/users/password-recovery",
      headers: {
        "Content-Type": "application/json",
      },
      data: passwordRecoveryInfo
    };
    CustomLoading('submitting-password-recovery').showLoading()
    CustomLoading('submitting-password-recovery').hideLoading()
    try {
      await api.request(config);
      setTimeout(() => {
        downloadApi(id)
        CustomLoading('submitting-password-recovery').hideLoading()
      }, 2000)
    } catch (error) {
      console.log(error)
      Notify.create({
        position: "center",
        type: "negative",
        message: "Couldn't sign up",
      });
      CustomLoading('submitting-password-recovery').hideLoading()
    }
  }
  return {
    passwordRecoveryInfo,
    submitPasswordRecovery,
  }

});
