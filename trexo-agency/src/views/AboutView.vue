<script setup>
import AboutImg from "../assets/images/about-pic.jpg";
import { RouterLink } from "vue-router";
</script>

<template>
  <!--h-260 sm:h-180 md:h-150 lg:h-160-->
  <section class="py-10 px-5 sm:px-20 md:px-5 lg:mt-7 min-h-screen">
    <div class="container-xl lg:container-xl">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
        <div>
          <img :src="AboutImg" class="rounded-xl" alt="Image" />
        </div>
        <div class="lg:mt-5">
          <h1 class="text-2xl lg:text-4xl mb-3">About Us</h1>
          <p class="text-xs md:text-sm lg:text-xl">
            At Trexo, we turn travel dreams into unforgettable experiences.
            Whether you're seeking adventure, relaxation, or a cultural escape,
            our expert team crafts personalized trips that suit your style and
            budget. Let us handle the details—your next great journey starts
            here.
          </p>
          <div class="mt-6 lg:mt-10">
            <RouterLink
              to="/packages"
              class="bg-blue-200 p-3 rounded-lg text-sm sm:text-xs md:text-sm lg:text-xl"
              >View Packages</RouterLink
            >
          </div>
        </div>
      </div>

      <div
        class="md:my-20 md:p-4 bg-gray-100 lg:py-15 rounded-lg my-20 px-6 py-10"
      >
        <h1 class="text-xl lg:text-3xl text-center">Start Your Journey</h1>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-3 mx-auto text-center mt-10 rounded-lg"
        >
          <div class="border rounded p-6">
            <i class="pi pi-map-marker text-blue-500 md:text-2xl text-2xl"></i>
            <h6 class="text-xl mt-2">1. Choose Destination</h6>
            <p class="text-sm mt-2">
              Start by selecting your dream destination.
            </p>
            <div class="text-center mt-4">
              <RouterLink
                to="/packages"
                class="text-xs bg-blue-300 p-2 rounded-lg"
                >Start Now</RouterLink
              >
            </div>
          </div>
          <div class="border rounded p-4">
            <i class="pi pi-user-plus text-blue-500 md:text-2xl text-2xl"></i>
            <h6 class="text-xl mt-2">2. Select Agency</h6>
            <p class="text-sm mt-2">
              Pick the travel agency that fits your needs.
            </p>
            <div class="text-center mt-4">
              <RouterLink
                to="/packages"
                class="text-xs bg-blue-300 p-2 rounded-lg"
                >Start Now</RouterLink
              >
            </div>
          </div>
          <div class="border rounded p-4">
            <i class="pi pi-face-smile text-blue-500 md:text-2xl text-2xl"></i>
            <h6 class="text-xl mt-2">3. Enjoy the Journey</h6>
            <p class="text-sm mt-2">Explore and make unforgettable memories.</p>
            <div class="text-center mt-4">
              <RouterLink
                to="/packages"
                class="text-xs bg-blue-300 p-2 rounded-lg"
                >Start Now</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
