<script setup>
import { defineProps } from "vue";
import { RouterLink, useRoute } from "vue-router";

defineProps({
  header: {
    type: String,
  },
  paragraph: {
    type: String,
  },
  buttonLabel: {
    type: String,
  },
  bgColor: {
    type: String,
  },
  buttonBgColor: {
    type: String,
  },
  buttonTextColor: {
    type: String,
    default: "text-black",
  },
  buttonBorder: {
    type: String,
    default: "border",
  },
});

const urlProvider = (buttonLabel) => {
  const route = useRoute();
  if (buttonLabel === "View Packages") {
    return "/packages";
  } else {
    return "/add-package";
  }
};
</script>

<template>
  <div v-bind:class="bgColor" class="p-6 rounded shadow-md text-center">
    <h2 class="text-2xl font-bold">{{ header }}</h2>
    <p class="mt-2 mb-4">
      {{ paragraph }}
    </p>
    <RouterLink
      :to="urlProvider(`${buttonLabel}`)"
      v-bind:class="[buttonBgColor, buttonTextColor, buttonBorder]"
      class="inline-block rounded-lg px-4 py-2"
      >{{ buttonLabel }}</RouterLink
    >
  </div>
</template>
