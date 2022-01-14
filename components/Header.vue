<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { LogoutIcon, SearchIcon, ShoppingCartIcon, UserIcon } from '@heroicons/vue/outline/index.js'
import { usePublicStore } from '~/stores/public'

const publicStore = usePublicStore()
</script>

<template>
  <nav class="w-full mx-auto bg-gray-700 shadow-md">
    <div class="container px-6 justify-between h-16 flex items-center mx-auto">
      <div class="h-full flex items-center">
        <nuxt-link class="mr-10 flex items-center" to="/">
          <svg id="logo" aria-label="Home" enable-background="new 0 0 300 300" height="44" viewBox="0 0 300 300" width="43">
            <g>
              <path
                fill="#696ede"
                d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
              />
            </g>
          </svg>
          <h3 class="text-base text-light-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
            The North
          </h3>
        </nuxt-link>

        <ul class="pr-12 xl:flex items-center h-full hidden">
          <li class="hover:text-blue-400 cursor-pointer h-full flex items-center text-sm text-light-700 mr-10 tracking-normal">
            Dashboard
          </li>
          <li class="hover:text-blue-400 cursor-pointer h-full flex items-center text-sm text-light-700 mr-10 tracking-normal">
            Products
          </li>
          <li class="hover:text-blue-400 cursor-pointer h-full flex items-center text-sm text-light-700 mr-10 tracking-normal">
            Performance
          </li>
          <li class="hover:text-blue-400 cursor-pointer h-full flex items-center text-sm text-light-700 mr-10 tracking-normal">
            Deliverables
          </li>
        </ul>
      </div>

      <div class="h-full flex items-center">
        <div class="w-full h-full flex items-center">
          <Input class="w-56 bg-gray-800 border border-gray-800 caret-blue-400" placeholder="Search">
            <template #prefix>
              <div class="text-gray-200 w-4 h-4">
                <SearchIcon />
              </div>
            </template>
          </Input>
        </div>
        <Menu as="div" class="relative inline-block w-full h-full z-10 text-left ml-6">
          <MenuButton class="bg-gray-700 cursor-pointer flex w-full h-full items-center justify-end relative">
            <img class="rounded h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" alt="logo">
            <p class="text-light-700 text-sm ml-2">
              Jane Doe
            </p>
          </MenuButton>

          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-1">
                <MenuItem>
                  <a class="flex items-center text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
                    <UserIcon class="w-6 h-6" />
                    <span class="ml-2"> My Profile </span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a class="flex items-center text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
                    <LogoutIcon class="w-6 h-6" />
                    <span class="ml-2"> Logout </span>
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <NuxtLink class="relative flex" to="/cart">
          <ShoppingCartIcon class="w-8 h-full ml-6 text-gray-300 cursor-pointer" />
          <client-only>
            <span v-if="publicStore.cart.length > 0" class="absolute flex w-4 h-4 text-sm text-center justify-center items-center left-11 bottom-5 bg-blue-400 rounded-1 text-gray-100">{{ publicStore.cart.length }}</span>
          </client-only>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
