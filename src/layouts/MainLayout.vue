<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/">
            <span class="">API generator</span>
          </router-link>
        </q-toolbar-title>

        <div class="q-space-sm">
          <router-link class="text-white q-mr-sm" to="/pos"><q-btn flat label="POS" /></router-link>
          <router-link class="text-white q-mr-sm" to="/ui-generator-edit"><q-btn flat
              label="Ui Builder" /></router-link>
          <router-link class="text-white q-mr-sm" to="/tutorials"><q-btn flat label="Tutorials" /></router-link>
          <router-link class="text-white q-mr-sm" to="/auth/login"><q-btn flat label="Login" /></router-link>
          <router-link class="text-white" to="/auth/signup"><q-btn outline color="white"
              label="Sign Up" /></router-link>
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <div class="container-width">
        <router-view />
      </div>
    </q-page-container>


  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from "vue";

const essentialLinks = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];
const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
