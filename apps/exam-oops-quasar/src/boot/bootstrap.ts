import { boot } from "quasar/wrappers";
// import { pinia } from "stores/index";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(
  async ({ app, router, store } /* { app, router, ... } */) => {
    app.use(store);
    console.log("bootstrap", app, router, store);
  }
);
