<script setup lang="ts">
import type { Product } from '~/types'

const products = ref<Product[]>([{
  image_src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  name: 'Áo bẩn',
  price: '$58',
  color: 'Black',
}])
</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 grid-cols-4">
        <ProductItem v-for="(product, index) in products" :key="index" :product="product" />
      </div>
    </div>
  </div>
</template>
