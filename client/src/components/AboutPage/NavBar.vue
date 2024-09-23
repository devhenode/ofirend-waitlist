<template>
  <Disclosure as="nav" class="bg-white shadow-lg" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Logo and Nav Links Container -->
        <div class="flex flex-1 items-center justify-around">
          <!-- Logo -->
          <div class="flex flex-shrink-0 items-center">
            <img class="h-4 w-auto" :src="logoIcon" alt="Your Company" />
          </div>

          <!-- Mobile Menu Button (only visible on mobile) -->
          <div class="absolute inset-y-0 right-0 flex items-center lg:hidden">
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-blue-950 hover:bg-blue-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <img :src="menu" alt="" v-if="!open" class="block h-6 w-6" aria-hidden="true">
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          <!-- Desktop Menu Links (only visible on web) -->
          <div class="hidden lg:flex space-x-8">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-white text-blue-400' : 'text-blue-950 hover:text-blue-950', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu (only visible on mobile) -->
    <DisclosurePanel class="lg:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline';
import menu from '@/assets/menu.png'
import logoIcon from '@/assets/logo-icon.png' 

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about', current: true },
  { name: 'Bootcamp', href: '#', current: false },
]
</script>
