<script setup>
import { useRoute } from "vue-router";
import Package from "@/components/Package.vue";
import PackagesData from "../../pkgData.json";

const urlCheck = (url) => {
  const route = useRoute();

  if (url === route.path) {
    return "hidden";
  }
};
</script>

<template>
  <section class="bg-">
    <div class="flex justify-end">
      <a
        class="border-2 px-2 py-2 rounded-lg text-blue-600 border-blue-500 mt-6 border cursor-pointer mr-3 hover:bg-blue-500 hover:text-white md:mr-10 lg:mr-10 xl:mr-20"
        >Add Package</a
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
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <Package
          v-for="(pkg, index) in PackagesData"
          :key="index"
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
