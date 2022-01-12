import defineComponent from './Header.vue';
<template>
  <nav class="w-full mx-auto bg-white shadow">
    <div class="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
      <div class="h-full flex items-center">
        <div class="mr-10 flex items-center">
          <svg id="logo" aria-label="Home" enable-background="new 0 0 300 300" height="44" viewBox="0 0 300 300" width="43" :xmlns="xmlns" :xmlns:xlink="xlink">
            <g>
              <path
                fill="#4c51bf"
                d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
              />
            </g>
          </svg>
          <h3 class="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
            The North
          </h3>
        </div>

        <ul class="pr-12 xl:flex items-center h-full hidden">
          <li class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal border-b-2 border-indigo-700">
            Dashboard
          </li>
          <li class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal">
            Products
          </li>
          <li class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 mr-10 tracking-normal">
            Performance
          </li>
          <li class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gray-800 tracking-normal">
            Deliverables
          </li>
        </ul>
      </div>

      <div class="h-full flex items-center justify-end">
        <div class="w-full h-full flex items-center">
          <div class="w-full pr-12 h-full flex items-center">
            <Input placeholder="Search">
              <template #prefix>
                <div class="text-gray-500 w-4 h-4">
                  <SearchIcon />
                </div>
              </template>
            </Input>
          </div>
          <Menu as="div" class="relative inline-block w-full h-full text-left">
            <MenuButton class="cursor-pointer flex w-full h-full items-center justify-end relative">
              <img class="rounded h-10 w-10 object-cover" :src="profilePhoto" alt="logo">
              <p class="text-gray-800 text-sm ml-2">
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
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { LogoutIcon, SearchIcon, UserIcon } from '@heroicons/vue/outline'

export default defineComponent({
  components: {
    LogoutIcon,
    SearchIcon,
    UserIcon,
    MenuItem,
    MenuItems,
    Menu,
    MenuButton,
  },
  data() {
    return {
      xmlns: 'http://www.w3.org/2000/svg',
      xlink: 'http://www.w3.org/1999/xlink',
      profilePhoto: 'https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png',
    }
  },
  methods: {
    dropdownHandler(event) {
      const single = event.currentTarget.getElementsByTagName('ul')[0]
      single.classList.toggle('hidden')
    },
    MenuHandler(el, val) {
      const MainList = el.currentTarget.parentElement.getElementsByTagName('ul')[0]
      const closeIcon = el.currentTarget.parentElement.getElementsByClassName('close-m-menu')[0]
      const showIcon = el.currentTarget.parentElement.getElementsByClassName('show-m-menu')[0]
      if (val) {
        MainList.classList.remove('hidden')
        el.currentTarget.classList.add('hidden')
        closeIcon.classList.remove('hidden')
      } else {
        showIcon.classList.remove('hidden')
        MainList.classList.add('hidden')
        el.currentTarget.classList.add('hidden')
      }
    },
  },
})
</script>
