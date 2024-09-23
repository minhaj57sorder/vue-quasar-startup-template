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
                <h5 class="auth-form-title">Log in</h5>
            </div>
            <div>
                <q-input v-model:model-value="userLoginStore.loginUserInfo.email" type="text" label="email" outlined dense />
            </div>
            <div class="q-mt-md">
                <q-input v-model:model-value="userLoginStore.loginUserInfo.password" type="password" label="password" outlined dense />
            </div>
            <div class="text-center q-mt-md">
              <router-link to="/auth/login/password-recovery">Forgot password</router-link>
            </div>
            <div class="q-mt-md">
                <q-btn @click="userLoginStore.submitLogin" class="full-width" color="blue" label="Login" />
            </div>
        </form>
        <div class="text-center text-bold q-mt-md">
          New to api generator? <router-link to="/auth/signup">Sign Up</router-link>
        </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { useMeta } from 'quasar'
import { api } from 'src/boot/axios';
import {useUserLoginStore} from 'src/stores/auth/loginStore.js'

const userLoginStore = useUserLoginStore()
const metaData = {
  // sets document title
  title: 'API generator | Log in',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - My Website`,

  // meta tags
  meta: {
    description: { name: 'description', content: 'Api generator site helps you to create CRUD api without any coding experience.' },
    keywords: { name: 'keywords', content: 'Api generator website' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle:  {
      property: 'og:title',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template (ogTitle) {
        return `${ogTitle} - My Website`
      }
    }
  },

  // CSS tags
  link: {
    material: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  },

  // JS tags
  script: {
    ldJson: {
      type: 'application/ld+json',
      innerHTML: `{ "@context": "http://schema.org" }`
    }
  },

  // <html> attributes
  htmlAttr: {
    'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
    empty: undefined // generates <html empty>
  },

  // <body> attributes
  bodyAttr: {
    'action-scope': 'xyz', // generates <body action-scope="xyz">
    empty: undefined // generates <body empty>
  },

  // <noscript> tags
  noscript: {
    default: 'This is content for browsers with no JS (or disabled JS)'
  }
}

useMeta(metaData)

</script>

<style scoped></style>
