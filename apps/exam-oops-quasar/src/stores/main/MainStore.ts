import { defineStore } from "pinia";
// import { MainState } from "./MainStore-types";

export const useMainStore = defineStore("Main", {
  state: () => ({ leftDrawerOpen: true }),
  getters: {
    getLeftDrawerOpen: state => state.leftDrawerOpen
  },
  actions: {
    setToggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    }
  }
});
