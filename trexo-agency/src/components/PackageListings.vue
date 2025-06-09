<script setup>
import { RouterLink } from "vue-router";
// import PackagesData from "../../pkgData.json";
import Package from "@/components/Package.vue";
import { usePackages } from "@/composables/usePackages";

const { packages, loading, error } = usePackages();
</script>

<template>
  <section class="bg-gray-200 px-4 py-10 mx-3 my-10 rounded-xl">
    <div class="container-xl lg:container m-auto">
      <div class="text-center">
        <h2 class="text-2xl md:text-3xl text-blue-700 font-bold p-3 mb-10">
          Available Packages
        </h2>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-10">
        <div
          class="animate-spin rounded-full w-12 border-b-2 border-blue-700 mx-auto"
        ></div>
        <p class="mt-4 text-gray-600">Loading Packages...</p>
      </div>

      <!--Error state-->
      <div v-else-if="error" class="text-center py-10">
        <p class="text-red-500">{{ error }}</p>
      </div>

      <!-- Packages grid-->
      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <Package
          v-for="pkg in packages.slice(0, 3)"
          :key="pkg.id"
          :destination="pkg.destination"
          :image="pkg.image"
          :price="pkg.price"
          :id="pkg.id"
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
