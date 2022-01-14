<script setup lang="ts">
import type { Product } from '~/types'

defineProps<{
  products: Product[]
}>()
</script>

<template>
  <div class="container bg-white mx-auto px-6 py-16">
    <div class="grid grid-cols-1 gap-y-10 gap-x-6 grid-cols-4">
      <ProductItem v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </div>
</template>
