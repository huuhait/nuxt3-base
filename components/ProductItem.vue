<script setup lang="ts">
import type { Product } from '~/types'

defineProps<{
  product: Product
}>()
</script>

<template>
  <NuxtLink class="group relative" :to="`/product/${product.id}`">
    <div class="w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
      <img :src="product.image_src" class="w-full h-full object-center object-cover lg:w-full lg:h-full">
    </div>
    <div class="text-sm truncate">
      {{ product.name }}
    </div>
    <div class="text-sm font-bold text-indigo-600">
      ${{ product.price }}
    </div>
  </NuxtLink>
</template>
