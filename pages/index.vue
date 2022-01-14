<script setup lang="ts">
import type { Product } from '~/types'

const products = ref<Product[]>([
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
  {
    id: 1,
    image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
    name: 'Kappa quần shorts thể thao nam 35187BW 005',
    price: '58',
  },
])
</script>

<template>
  <div class="block">
    <SlideShow />
    <ProductList :products="products" />
  </div>
</template>
