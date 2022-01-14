import { defineNuxtPlugin } from '#app'
import { usePublicStore } from '~/stores/public'

export default defineNuxtPlugin(() => {
  const publicStore = usePublicStore()

  publicStore.Init()
})
