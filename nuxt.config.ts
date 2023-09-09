export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "",
      htmlAttrs: {
        lang: "en"
      },
      bodyAttrs: {
        "data-bs-theme": "dark"
      },
      meta: [
        { name: "robots", content: "index, follow" }
      ]
    }
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css"
  ],
  modules: [],
  runtimeConfig: {},
  experimental: {
    inlineSSRStyles: false
  }
});
