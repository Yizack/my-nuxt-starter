export default defineNuxtConfig({
  // future: { compatibilityVersion: 4 },
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "",
      htmlAttrs: {
        lang: "en"
      },
      link: [],
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

  icon: {
    mode: "svg",
    clientBundle: { scan: true, sizeLimitKb: 2048 }
  },

  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  },

  runtimeConfig: {},

  colorMode: {
    preference: "light",
    fallback: "light",
    dataValue: "bs-theme",
    storageKey: "nuxt-color-mode"
  },

  site: { url: "" },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: false,
      routes: ["/sitemap.xml"]
    },
    cloudflare: {
      pages: {
        routes: {
          exclude: ["/images/*"]
        }
      }
    },
    experimental: {
      tasks: true
    }
  },

  sitemap: {
    discoverImages: false,
    defaults: { priority: 0.8, lastmod: new Date().toISOString() },
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "35%" }
    ]
  },

  routeRules: {
    // @ts-expect-error remove once fixed sitemap module
    "/": { sitemap: { priority: 1 } },
    "/api/_nuxt_icon/**": { cache: { maxAge: 1.577e+7 } }
  },

  features: {
    inlineStyles: false
  },

  experimental: {
    typedPages: true
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["mixed-decls", "color-functions", "import", "global-builtin"]
        }
      }
    }
  },

  compatibilityDate: "2025-07-22"
});
