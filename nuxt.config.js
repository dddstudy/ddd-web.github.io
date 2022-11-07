import { defineNuxtConfig } from "@nuxt/bridge";

//https://v3.nuxtjs.org/bridge/overview/
export default defineNuxtConfig({
  bridge: true, // Temporarily disable bridge integration
  // Global page headers: https://go.nuxtjs.dev/config-head'
  head: {
    title: "ddd-web",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  /*@nuxtjs/style-resources*/
  styleResources: {
    //array of strings that are paths to the file:
    scss: ["~/assets/styles/common.scss"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/client-api"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  generate: {
    // composition-api -> choose to suit your project
    // @nuxtjs/composition-api/module 비동기 문제로 추가
    interval: 2000,
    cache: {
      // ignore: ['renovate.json'] // ignore changes applied on this file
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@pinia/nuxt", "@nuxtjs/style-resources"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  ssr: false,
  publicRuntimeConfig: {
    // BASE_URL: '/ddd-web.github.io',
    axios: {
      // baseURL: ''
    },
  },
  target: "static",
  router: {
    // base: '/ddd-web.github.io/'
  },
});
