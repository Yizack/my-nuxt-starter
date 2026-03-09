import { SITE } from "../shared/utils/site";
import icons from "./icons";

export default defineNuxtConfig({
  // future: { compatibilityVersion: 5 },

  modules: [
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "@nuxthub/core"
  ],

  $production: {
    nitro: {
      preset: "cloudflare-module"
    }
  },

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
    "~/assets/css/ui.tailwind.css",
    "~/assets/scss/app.scss"
  ],

  site: {
    url: SITE.host
  },

  colorMode: {
    preference: "dark",
    fallback: "dark"
  },

  ui: {
    colorMode: true,
    fonts: false,
    theme: {
      colors: ["primary", "success", "error"]
    }
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

  hub: {
    db: {
      dialect: "sqlite",
      casing: "snake_case"
    },
    blob: true // ,
    // cache: true
    // kv: true
  },

  icon: {
    mode: "svg",
    provider: "none",
    clientBundle: { icons },
    customCollections: [
      // { prefix: "custom", dir: "./app/assets/icons" }
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
