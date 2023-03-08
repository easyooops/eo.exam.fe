import { defineStore } from "pinia";
import { AppConfig, Auth, User } from "./AppStore-types";

export const useMainStore = defineStore("App", {
  state: () => ({
    user: {} as User,
    auth: {} as Auth,
    appConfig: {} as AppConfig
  }),
  getters: {},
  actions: {}
});
