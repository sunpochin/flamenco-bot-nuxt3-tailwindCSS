import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/tailwind.css',
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  watchers: {
    webpack: {
      poll: true
    }
  },
  // Enable auto-routing based on pages directory
  pages: true,
  // Alternatively, you can set up route rules if you need to customize routing
  routeRules: {
    '/': { redirect: '/home' }
  },
})
