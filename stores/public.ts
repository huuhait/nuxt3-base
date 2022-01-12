import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePublicStore = defineStore({
  id: 'public',
  state() {
    return {
      first_route: ref<boolean>(true),
      headers: ref<{ [key: string]: any }>(),
      email: ref<string>(''),
      password: ref<string>(''),
    }
  },
  getters: {
    isAuthenticated(): boolean {
      return !!this.email
    },
  },
  actions: {
    Login() {
      this.email = ''
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePublicStore, import.meta.hot))
