<script setup>
import Card from "@/components/Card.vue";
</script>

<template>
  <section class="mt-20">
    <div class="container-xl lg:container m-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4 p-4 rounded-lg md:px-10 xl:px-50"
      >
        <Card
          header="For Travelers"
          paragraph="Experience breathtaking views — with travel packages designed for
            you."
          bgColor="bg-gray-100"
          buttonTextColor="text-white"
          buttonLabel="View Packages"
          buttonBgColor="bg-black"
        />
        <Card
          header="For Agencies"
          paragraph="Partner with Trexo — Add your tour packages and reach travelers worldwide."
          bgColor="bg-[#BBFBFF]"
          buttonLabel="Add Package"
          buttonBgColor="bg-white"
        />
      </div>
    </div>
  </section>
</template>
