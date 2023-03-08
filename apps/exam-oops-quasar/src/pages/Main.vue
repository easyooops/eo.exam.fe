<template>
  <q-layout view="hHh LpR fff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="setToggleLeftDrawer" />
        <q-toolbar-title> MSA MAKER </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <main-drawer></main-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar> 한국어 </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMainStore } from "stores/main/MainStore";
import { mapActions } from "pinia";
import MainDrawer from "components/layouts/Drawer.vue";
export default defineComponent({
  name: "MainLayout",
  components: { MainDrawer },

  methods: {
    ...mapActions(useMainStore, ["setToggleLeftDrawer"])
  }
});
</script>
