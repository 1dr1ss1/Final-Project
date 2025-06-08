<script setup>
import { RouterLink, useRoute } from "vue-router";
import pkgData from "../../pkgData.json";
import { ref } from "vue";

const selectedCardData = ref({});

const route = useRoute();
const match = pkgData.find((pkg) => pkg.id === route.params.id);

if (match) {
  selectedCardData.value = {
    image: match.image,
    destination: match.destination,
    country: match.country,
    price: match.price,
    description: match.description,
    agency: {
      name: match.agency.name,
      contactEmail: match.agency.contactEmail,
      companyDescription: match.agency.companyDescription,
    },
  };
}
</script>

<template>
  <!--Back Button-->
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/packages"
        class="text-blue-500 hover:text-blue-700 flex items-center"
      >
        <i class="pi pi-angle-left"></i>
        Back to Packages
      </RouterLink>
    </div>
  </section>

  <!--Package Description-->
  <section class="bg-blue-50 min-h-screen">
    <div class="container m-auto py-10 px-6">
      <div
        class="grid grid-cols-1 md:px-10 md:grid-cols-1 lg:grid-cols-2 md:gap-10 w-full gap-6 xl:px-20"
      >
        <main>
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <h1 class="text-3xl font-bold mb-2">
              {{ selectedCardData.destination }}
            </h1>

            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i class="pi pi-map-marker text-orange-600 p-1"></i>
              <p class="text-orange-700">{{ selectedCardData.country }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-blue-800 text-lg font-bold mb-6">
              Trip Description
            </h3>

            <p class="mb-4">
              {{ selectedCardData.description }}
            </p>

            <h3 class="text-blue-800 text-lg font-bold mb-2">Price</h3>

            <p class="mb-4">${{ selectedCardData.price }} for 10 days</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside class="lg:pl-20">
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-blue-800 text-xl font-bold mb-6">Agency Info</h3>

            <h2 class="text-2xl">{{ selectedCardData.agency.name }}</h2>

            <p class="my-2">
              {{ selectedCardData.agency.companyDescription }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-blue-100 p-2 font-bold">
              {{ selectedCardData.agency.contactEmail }}
            </p>
          </div>

          <!-- Manage -->
          <div
            class="bg-white p-6 rounded-lg shadow-md mt-6 flex flex-col justify-center items-center"
          >
            <h3 class="text-xl font-bold mb-6">Manage Package</h3>
            <a
              href="add-job.html"
              class="bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-full w-[50%] focus:outline-none focus:shadow-outline mt-4 block"
              >Edit</a
            >
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-[50%] focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
