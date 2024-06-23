export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "robots", content: "index, follow" }
      ]
    }
  },
  css: [
    "~/assets/scss/app.scss"
  ],
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap"
  ],
  icon: { mode: "svg" },
  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  },
  runtimeConfig: {},
  features: {
    inlineStyles: false
  },
  colorMode: {
    preference: "light",
    fallback: "light",
    dataValue: "bs-theme",
    storageKey: "nuxt-color-mode"
  },
  site: { url: "" },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    }
  },
  sitemap: {
    dynamicUrlsApiEndpoint: "/__sitemap",
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "35%" },
    ]
  },
  routeRules: {
    "/": { sitemap: { priority: 1 } },
    "/*/**": { sitemap: { priority: 0.8, lastmod: new Date().toISOString() } },
    "/api/_nuxt_icon/**": { cache: { maxAge: 1.577e+7 } }
  }
});
