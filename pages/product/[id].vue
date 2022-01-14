<script setup lang="ts">
import type { Product } from '~/types'
import { usePublicStore } from '~/stores/public'

const publicStore = usePublicStore()
const product: Product = {
  id: 1,
  name: 'Kappa quần shorts thể thao nam 35187BW 005',
  price: '58',
  image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
  description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered. Highlights',
  sizes: [
    {
      name: 'S',
      quantity: 10,
    },
    {
      name: 'M',
      quantity: 10,
    },
    {
      name: 'L',
      quantity: 10,
    },
    {
      name: 'XL',
      quantity: 10,
    },
  ],
}
const size_index = ref<number>(0)
</script>

<template>
  <div class="container mx-auto flex justify-center py-5">
    <div class="w-xl">
      <div class="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
        <img :src="product.image_src" :alt="product.image_alt" class="w-full h-full object-center object-cover">
      </div>
    </div>

    <div class="max-w-2xl pt-6 pb-16 px-6">
      <div class="lg:col-span-2">
        <h1 class="font-extrabold tracking-tight text-gray-900 text-3xl">
          {{ product.name }}
        </h1>
      </div>

      <div class="font-md mt-6 text-lg text-gray-500">
        Price:
        <span class="text-gray-700 font-semibold">
          ${{ product.price }}
        </span>
      </div>

      <template v-if="product.sizes?.length">
        <div class="font-md mt-6 text-lg text-gray-500">
          Size: <span class="text-gray-700 font-semibold">{{ product.sizes[size_index].name }}</span>
        </div>
        <div class="flex mt-2">
          <div v-for="(size, index) in product.sizes" :key="index" :class="['flex items-center justify-center w-14 h-14 border mr-4 cursor-pointer', { 'border-dark-400': size_index === index }]" @click="size_index = index">
            {{ size.name }}
          </div>
        </div>
      </template>

      <div class="py-10">
        <h3 class="font-md text-lg mb-1 text-gray-700 font-semibold">
          Description
        </h3>

        <div class="space-y-6">
          <p class="text-base text-gray-500">
            {{ product.description }}
          </p>
        </div>

        <Button v-if="product.sizes?.length" class="mt-10" @click="publicStore.AddToCart(product.id, product.sizes[size_index].name, 1)">
          Add to bag
        </Button>
      </div>
    </div>
  </div>
</template>
