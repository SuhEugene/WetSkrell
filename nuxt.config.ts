// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "nuxt-icon"
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },  
      title: "WetSkrell",
      meta: [
        { "charset": "utf-8" },
        { "http-equiv": "X-UA-Compatible", "content": "IE=edge"},
        { "name": "viewport", "content": "width=device-width, initial-scale=1.0" }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Jost:wght@300;400;700&display=swap" }
      ]
    }
  },
  vite: { css: { preprocessorOptions: {
    scss: {
      additionalData: '@import "@/assets/vars.scss";@import "@/assets/mixins.scss";',
    }
  }}},
  srcDir: "src/"
})
