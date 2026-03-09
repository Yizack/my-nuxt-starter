import { SITE } from "../shared/utils/site";
import icons from "./icons";

export default defineNuxtConfig({
  // future: { compatibilityVersion: 5 },

  modules: [
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap"
  ],

  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: SITE.name,
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

  site: {
    url: SITE.host
  },

  colorMode: {
    preference: "light",
    fallback: "light",
    dataValue: "bs-theme",
    storageKey: "nuxt-color-mode"
  },

  runtimeConfig: {
    secure: {
      secret: ""
    }
  },

  features: {
    inlineStyles: false
  },

  experimental: {
    typedPages: true
  },

  compatibilityDate: "2026-03-09",

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

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["color-functions", "import", "global-builtin"]
        }
      }
    }
  },

  icon: {
    mode: "svg",
    provider: "none",
    clientBundle: { icons },
    customCollections: [
      { prefix: "custom", dir: "./app/assets/icons" }
    ]
  },

  sitemap: {
    discoverImages: false,
    defaults: { priority: 0.8, lastmod: new Date().toISOString() },
    urls: [
      { loc: "/", priority: 1 }
    ],
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "35%" }
    ],
    zeroRuntime: true
  }
});
