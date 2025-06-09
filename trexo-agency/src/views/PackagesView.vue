<script setup>
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";
import Package from "@/components/Package.vue";
// import PackagesData from "../../pkgData.json";
import { usePackages } from "@/composables/usePackages";

const route = useRoute();
const { packages, loading, error } = usePackages();

const urlCheck = (url) => {
  if (url === route.path) {
    return "hidden";
  }
};
</script>

<template>
  <section class="bg-">
    <div class="flex justify-end">
      <RouterLink
        to="/add-package"
        class="border-2 px-2 py-2 rounded-lg text-blue-600 border-blue-500 mt-6 border cursor-pointer mr-3 hover:bg-blue-500 hover:text-white md:mr-10 lg:mr-10 xl:mr-20"
        >Add Package</RouterLink
      >
    </div>
  </section>
  <section class="bg-gray-200 px-4 py-10 my-10 min-h-screen">
    <div class="container-xl lg:container m-auto">
      <div class="text-center">
        <h2 class="text-2xl md:text-3xl text-blue-700 font-bold p-3 mb-10">
          Available Packages
        </h2>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-10">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto"
        ></div>
        <p class="mt-4 text-gray-600">Loading packages...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-10">
        <p class="text-red-500">{{ error }}</p>
      </div>

      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <Package
          v-for="pkg in packages"
          :key="pkg.id"
          :destination="pkg.destination"
          :image="pkg.image"
          :price="pkg.price"
          :id="pkg.id"
        />
      </div>
    </div>
    <section
      :class="urlCheck('/packages')"
      class="max-w-sm text-center m-auto mt-20 p-3 bg-black rounded-lg text-white"
    >
      <RouterLink to="/packages">View All Packages</RouterLink>
    </section>
  </section>
</template>
