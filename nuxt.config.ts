// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@pinia/nuxt'],

  pinia: {
    autoImports: [
      'defineStore', 'definePiniaStore'
    ]
  },

  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY
  },

  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  css: [
    '~/assets/main.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
})
