<script setup lang="ts">
import { usePublicStore } from '~/stores/public'
import type { Product } from '~/types'

const publicStore = usePublicStore()

const products = ref<Product[]>([{
  id: 1,
  image_src: 'https://cdn.hoang-phuc.com/media/catalog/product/cache/b5b9c103f0cdba784a8ed454408448a1/3/5/351879w-a00-1.jpg',
  name: 'Kappa quần shorts thể thao nam 35187BW 005',
  price: '58',
}])

function getProduct(product_id: number) {
  return products.value.find(product => product.id === product_id)
}

const order_value = computed(() => {
  let price = 0

  for (const row of publicStore.cart) {
    const product = getProduct(row.product_id)

    price += Number(product?.price) * Number(row.quantity)
  }

  return price
})
</script>

<template>
  <div class="container mx-auto w-full h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700 text-gray-600">
    <h3 class="text-2xl font-medium px-3 mt-8">
      Checkout cart
    </h3>
    <div class="flex px-3 py-5">
      <div class="h-max w-2/3 mr-3 p-4 border border-gray-400">
        <div class="font-semibold text-lg">Enter your information</div>
        <form class="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Full name (<span class="text-red-500">*</span>)</label>
            <Input class="mt-2 border-gray-400" />
          </div>
          <div>
            <label>Phone number (<span class="text-red-500">*</span>)</label>
            <Input class="mt-2 border-gray-400" />
          </div>
          <div>
            <label>Email (<span class="text-red-500">*</span>)</label>
            <Input class="mt-2 border-gray-400" />
          </div>
          <div></div>
          <div>
            <label>Country (<span class="text-red-500">*</span>)</label>
            <Input class="mt-2 border-gray-400" />
          </div>
          <div>
            <label>State (<span class="text-red-500">*</span>)</label>
            <Input class="mt-2 border-gray-400" />
          </div>
          <div class="col-span-2">
            <label>Address (<span class="text-red-500">*</span>)</label>
            <TextArea :rows="1" class="mt-2 border-gray-400" />
          </div>
          <div class="col-span-2">
            <label>Note</label>
            <TextArea :rows="3" class="mt-2 border-gray-400" />
          </div>

          <div class="col-span-2 flex justify-center">
            <Button>CHECKOUT</Button>
          </div>
        </form>
      </div>
      <div class="sticky h-fit w-1/3 ml-3 p-4 border border-gray-400">
        <div class="text-xl pb-4 border-b border-gray-400">
          Order detail
        </div>
        <div class="py-4 border-b border-gray-400">
          <div v-for="(row, index) in publicStore.cart" :key="index" class="flex py-2">
            <div class="h-18">
              <img class="h-full" :src="getProduct(row.product_id)?.image_src">
            </div>
            <div class="block">
              <NuxtLink class="hover:underline" :to="`/product/${row.product_id}`">
                {{ getProduct(row.product_id)?.name }}
              </NuxtLink>
              <div class="text-gray-500">
                Size: {{ row.size }}
              </div>
              <div class="flex justify-between items-center">
                <div class="text-xl font-semibold mt-1">
                  ${{ getProduct(row.product_id)?.price }}
                </div>
                <div>
                  Quantity: {{ row.quantity }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between py-4">
          <span>Total order value:</span>
          <span>
            ${{ order_value }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
