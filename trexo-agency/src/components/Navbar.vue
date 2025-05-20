<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav
    class="bg-[#021043] shadow-[0_2px_4px_0_rgba(255,255,255,0.5)] border-white-500 sticky top-0"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-3">
      <div class="flex h-15 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <span
              class="md:block text-[#BBFBFF] text-2xl md:text-3xl font-bold ml-2"
              >Trexo</span
            >
          </RouterLink>
          <div class="md:ml-auto ml-5">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                class="text-white underline decoration-[#A2CCFF] decoration-2 hover:bg-gray-100 hover:text-black rounded-md px-3 py-2"
                >Home</RouterLink
              >
              <RouterLink
                to="/packages"
                class="text-white hover:bg-gray-100 hover:text-black rounded-md px-3 py-2"
                >Packages
              </RouterLink>
              <RouterLink
                to="/about"
                class="text-white hover:bg-gray-100 hover:text-black rounded-md px-3 py-2"
                >About</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
