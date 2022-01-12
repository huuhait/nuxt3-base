import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePublicStore = defineStore({
  id: 'public',
  state() {
    return {
      first_route: ref<boolean>(true),
      headers: ref<{ [key: string]: any }>(),
    }
  },
  actions: {
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePublicStore, import.meta.hot))
