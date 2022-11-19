module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:nuxt/recommended", "plugin:prettier/recommended"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
  },
};
