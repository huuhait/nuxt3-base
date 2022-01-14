import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Cart } from '~/types'

export const usePublicStore = defineStore({
  id: 'public',
  state() {
    return {
      first_route: ref<boolean>(true),
      headers: ref<{ [key: string]: any }>(),
      cart: useLocalStorage<Cart>('cart', []),
    }
  },
  actions: {
    Init() {
      this.cart = useLocalStorage<Cart>('cart', []).value
    },
    AddToCart(product_id: number, size: string, quantity: number) {
      const index = this.cart.findIndex(c => c.product_id === product_id && c.size === size)

      if (index >= 0) {
        this.cart[index].quantity += quantity
      } else {
        this.cart.push({
          product_id,
          size,
          quantity,
        })
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePublicStore, import.meta.hot))
