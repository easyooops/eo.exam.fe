module.exports = {
  root: true, //  true로 설정하지 않으면 파일 시스템의 상위 폴더까지 탐색하기 때문에 설정.
  env: {
    jest: true,
    node: true
  },
  // lint 무시할 폴더 지정
  ignorePatterns: [
    "packages/**/dist/*",
    "tools/generators/pkglib/files/tsconfig.json",
    "tools/generators/open-api/files/tsconfig.json"
  ],
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        arrowParens: "avoid",
        trailingComma: "none"
      }
    ]
  },
  overrides: [
    // vue3, ts
    {
      files: [
        "apps/exam-oops-vue/**",
        "apps/exam-oops-quasar/**",
        "apps/exam-oops-vuetify/**",
        "libs/vue3-common-ui/**"
      ],
      extends: [
        "@vue/typescript/recommended",
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "plugin:prettier/recommended"
      ]
    },
    // react, ts
    {
      files: ["apps/exam-oops-react/**"],
      extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        // "standard-with-typescript",
        "eslint:recommended",
        "plugin:prettier/recommended"
        // "prettier/react"
      ]
    },
    // packages *.ts
    {
      files: ["libs/**/*.ts", "packages/**/*.ts", "tools/generators/*/**/*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
      ]
    }
  ]
};
