module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  // root: true,
  //   extends: [
  //     "@vue/typescript/recommended",
  //     "plugin:vue/vue3-essential",
  //     "eslint:recommended",
  //     "plugin:prettier/recommended" //@see https://github.com/prettier/eslint-plugin-prettier
  //   ]
  // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  //   parserOptions: {
  //     parser: require.resolve("@typescript-eslint/parser"),
  //     extraFileExtensions: [".vue"]
  //   },
  //   env: {
  //     browser: true,
  //     es2021: true,
  //     node: true,
  //     "vue/setup-compiler-macros": true
  //   },
  //   globals: {
  //     ga: "readonly", // Google Analytics
  //     cordova: "readonly",
  //     __statics: "readonly",
  //     __QUASAR_SSR__: "readonly",
  //     __QUASAR_SSR_SERVER__: "readonly",
  //     __QUASAR_SSR_CLIENT__: "readonly",
  //     __QUASAR_SSR_PWA__: "readonly",
  //     process: "readonly",
  //     Capacitor: "readonly",
  //     chrome: "readonly"
  //   },
};
