// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "nuxt-icon"
  ],
  app: {
    html: { lang: "ru" },
    head: {
      meta: [
        { "name": "viewport", "content": "width=device-width, initial-scale=1" },
        { "charset": "utf-8" }
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Jost:wght@300;400;700&display=swap" }
      ]
    }
  },
  vite: { css: { preprocessorOptions: {
    scss: {
      additionalData: '@import "@/assets/vars.scss";',
    }
  }}},
  srcDir: "src/"
})
