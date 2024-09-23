<template>
  <section class="auth-section">
    <div class="auth-illustration">
      <!-- left image -->
      <img
        src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg"
      />
    </div>
    <div class="auth-wrapper">
      <div class="auth-form-section">
        <!-- auth form  -->
        <form class="auth-form">
          <div>
            <h5 class="auth-form-title">Password Recovery</h5>
            <p class="text-center">We will send you an email containing a password reset link</p>
          </div>
          <div>
            <q-input v-model:model-value="passwordRecoveryStore.passwordRecoveryInfo.email" type="text" label="email" outlined dense />
          </div>
          <div class="q-mt-md">
            <q-btn @click="passwordRecoveryStore.submitPasswordRecovery" class="full-width" color="blue" label="Send email" />
          </div>
        </form>
        <div class="text-center text-bold q-mt-md">
          Back to log in
          <router-link to="/auth/login">Log in</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {usePasswordRecoveryStore} from 'src/stores/auth/passwordRecoveryStore.js';
const passwordRecoveryStore = usePasswordRecoveryStore()
</script>

<style scoped></style>
