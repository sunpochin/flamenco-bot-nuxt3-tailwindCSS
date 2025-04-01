import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/tailwind.css',
    'vuetify/styles', // 加入 Vuetify 的樣式
    '@mdi/font/css/materialdesignicons.min.css' // 加入 Material Design Icons
  ],
  build: {
    transpile: ['vuetify'], // 確保 Vuetify 被轉譯
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  watchers: {
    webpack: {
      poll: true
    }
  },
  pages: true,
  routeRules: {
    '/': { redirect: '/home' }
  },
})
