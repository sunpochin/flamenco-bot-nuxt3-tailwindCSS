import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
  // Note: The old router.extendRoutes approach is removed as it's not compatible with Nuxt 3
})
