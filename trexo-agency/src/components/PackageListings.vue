<script setup>
import { RouterLink } from "vue-router";
import PackagesData from "../../pkgData.json";
import Package from "@/components/Package.vue";
</script>

<template>
  <section class="bg-gray-200 px-4 py-10 mx-3 my-10 rounded-xl">
    <div class="container-xl lg:container m-auto">
      <div class="text-center">
        <h2 class="text-2xl md:text-3xl text-blue-700 font-bold p-3 mb-10">
          Available Packages
        </h2>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <Package
          v-for="(pkg, index) in PackagesData.slice(0, 3) || PackagesData"
          :key="index"
          :destination="pkg.destination"
          :image="pkg.image"
          :price="pkg.price"
        />
      </div>
    </div>
    <section
      class="max-w-sm text-center cursor-pointer m-auto mt-20 p-3 bg-black rounded-lg text-white"
    >
      <RouterLink to="/packages">View All Packages</RouterLink>
    </section>
  </section>
</template>
