<script setup>
import { defineProps } from "vue";

defineProps({
  image: {
    type: String,
  },
  destination: {
    type: String,
  },
  price: {
    type: String,
  },
});

const newImageUrl = (fileName) => {
  return new URL(`../assets/images/${fileName}`, import.meta.url).href;
};
</script>

<template>
  <!--Package 1-->
  <div class="bg-white rounded-lg shadow-md">
    <div class="p-4">
      <div class="mb-3 aspect-[16/9]">
        <img
          v-bind:src="newImageUrl(image)"
          class="w-full h-full object-cover"
          alt="Image"
        />
      </div>
      <div class="flex justify-between">
        <h2 class="font-bold">{{ destination }}</h2>
        <h4 class="text-red-500">
          <span class="text-red-500 font-bold mr-1">${{ price }}</span>
          <span class="text-sm md:text-xs text-gray-500">for 10 days</span>
        </h4>
      </div>
      <div class="mt-8 flex justify-end">
        <a
          href="index.html"
          class="bg-[#A2CCFF] rounded-md p-2 text-xs md:text-[10px] lg:text-xs"
          >Read More</a
        >
      </div>
    </div>
  </div>
</template>
