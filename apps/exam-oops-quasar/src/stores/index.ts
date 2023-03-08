import { store } from "quasar/wrappers";
import { createPinia } from "pinia";

export default store((/* { ssrContext } */) => {
  const pinia = createPinia();

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia;
});

// const pinia = createPinia();
// // You can add Pinia plugins here
// // pinia.use(SomePiniaPlugin)
// export default store((/* { ssrContext } */) => {
//   // console.log("it's right way but not working");
//   return pinia;
// });

// export { pinia };
