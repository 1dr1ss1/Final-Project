<script setup>
import HeroCards from "@/components/HeroCards.vue";
</script>

<template>
  <section class="bg-[#0E1F5C] py-20 mb-4">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
          Trexo: <br class="hidden lg:block" />
          Turning
          <span class="text-[#BBFBFF] font-light">Destinations</span> into
          <i class="font-light">Adventures</i>
        </h1>
      </div>
    </div>
    <HeroCards />
  </section>
</template>
