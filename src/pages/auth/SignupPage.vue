<template>
  <section class="auth-section">
    <div class="auth-illustration">
      <!-- left image -->
      <img src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg"/>
    </div>
    <div class="auth-wrapper">
        <div class="auth-form-section">
          <!-- auth form  -->
          <form class="auth-form">
            <div>
                <h5 class="auth-form-title">Create your free account</h5>
                <p class="text-center">No credit card required</p>
            </div>
            <div>
                <q-input v-model:model-value="userSigninStore.signUpUserInfo.fullName" type="text" label="name" outlined dense />
            </div>
            <div class="q-mt-md">
                <q-input v-model:model-value="userSigninStore.signUpUserInfo.email" type="text" label="email" outlined dense />
            </div>
            <div class="q-mt-md">
                <q-input v-model:model-value="userSigninStore.signUpUserInfo.password" type="password" label="password" outlined dense />
            </div>
            <div class="q-mt-md">
                <q-input v-model:model-value="userSigninStore.signUpUserInfo.password2" type="password" label="confirm password" outlined dense />
            </div>
            <div class="q-mt-md">
                <q-btn @click="userSigninStore.submitSignin" class="full-width" color="blue" label="Login" />
            </div>
        </form>
        <div class="text-center text-bold q-mt-md">
          Already have an account? <router-link to="/auth/login">Log in</router-link>
        </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import {useUserSigninStore} from 'src/stores/auth/registerStore.js'
const userSigninStore = useUserSigninStore()
</script>

<style scoped></style>
