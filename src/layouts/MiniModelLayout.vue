<template>
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
        <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
            <q-toolbar>
                <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
                <q-toolbar-title>Header</q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @click.capture="drawerClick" :width="265"
            :breakpoint="500" bordered :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
            <q-scroll-area :horizontal-thumb-style="{ opacity: 0 }"
                style="height: calc(100% - 68px); margin-top: 68px; border-right: 1px solid #ddd">
                <q-list :bordered="false">
                    <q-item class="q-pa-none">
                        <q-btn icon="dashboard" flat to="#" class="full-width text-weight-bold" align="left" no-caps>
                            <span v-show="!miniState" style="padding-left: 32px;">label="Button Link"</span>
                        </q-btn>
                    </q-item>
                    <q-expansion-item class="border-bottom-1 text-weight-bold" group="somegroup" expand-separator
                        icon="mail" label="Inbox" default-opened>
                        <q-list :bordered="false" class="border-top-1">
                            <q-btn flat to="#" label="Button Link" class="full-width text-weight-regular" align="left"
                                no-caps style="padding-left: 72px;"></q-btn>
                        </q-list>
                    </q-expansion-item>
                </q-list>
            </q-scroll-area>

            <!--
            in this case, we use a button (can be anything)
            so that user can switch back
            to mini-mode
          -->
            <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 68px">
                <div class="absolute-bottom bg-transparent">
                    <div class="flex justify-between items-center">
                        <div v-show="!miniState">
                            <div class="text-weight-bold">ERP</div>
                            <div>Developed By Minhaj</div>
                        </div>
                        <div v-show="miniState">
                            <q-btn dense round unelevated color="transparent" icon="keyboard_double_arrow_right"
                                @click="miniState = true" />
                        </div>
                        <div class="q-mini-drawer-hide ">
                            <q-btn dense round unelevated color="transparent" icon="keyboard_double_arrow_left"
                                @click="miniState = true" />
                        </div>
                    </div>
                </div>
            </q-img>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const miniState = ref(false)
        const hoverState = ref(false)

        return {
            drawer: ref(true),
            miniState,
            hoverState,

            drawerClick(e) {
                console.log("clicked")
                // if in "mini" state and user
                // click on drawer, we switch it to "normal" mode
                if (miniState.value) {
                    miniState.value = false

                    // notice we have registered an event with capture flag;
                    // we need to stop further propagation as this click is
                    // intended for switching drawer to "normal" mode only
                    e.stopPropagation()
                }

            },
        }
    }
}
</script>