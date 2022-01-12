import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Vitesse Nuxt 3',
  },
  buildModules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-windicss',
  ],
  vueuse: {
    ssrHandlers: true,
  },
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 1500,
    },
  },
})
