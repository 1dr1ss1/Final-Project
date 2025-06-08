<script setup>
import PackagesData from "../../pkgData.json";
import { ref } from "vue";

const packageList = [];

const newPackage = ref({
  id: PackagesData.length + 1,
  destination: "",
  country: "",
  image: null,
  price: "",
  description: "",
  agency: {
    name: "",
    contactEmail: "",
    companyDescription: "",
  },
});

const handleSubmit = () => {
  packageList.push(newPackage.value);
  console.log(packageList);
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
  newPackage.value.image = file;
};
</script>

<template>
  <section class="bg-blue-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 mb-4 shadow-md py-5 rounded-md m-4 md:m-0">
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6 mt-4">
            Add Package
          </h2>
          <h3 class="text-2xl font-semibold text-blue-700 mb-4">
            Package Info
          </h3>
          <div class="mb-4">
            <input
              v-model="newPackage.destination"
              type="text"
              id="city"
              name="city"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="City"
              required
            />
          </div>
          <div class="mb-4">
            <input
              v-model="newPackage.country"
              type="text"
              id="country"
              name="country"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="Country "
              required
            />
          </div>
          <div class="mb-4">
            <input
              v-model="newPackage.price"
              type="number"
              id="price"
              name="price"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="Price for 10 days"
              required
            />
          </div>
          <div class="mb-4">
            <input
              v-model="newPackage.description"
              type="text"
              id="description"
              name="description"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="Package Description"
              required
            />
          </div>
          <h3 class="text-2xl font-semibold text-blue-700 mb-4">Agency Info</h3>
          <div class="mb-4">
            <input
              v-model="newPackage.agency.name"
              type="text"
              id="agency-name"
              name="agency-name"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="Agency Name"
              required
            />
          </div>
          <div class="mb-4">
            <input
              v-model="newPackage.agency.contactEmail"
              type="email"
              id="agency-email"
              name="agency-email"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="Email"
              required
            />
          </div>
          <div class="mb-4">
            <textarea
              v-model="newPackage.agency.companyDescription"
              type="text"
              id="agency-description"
              name="agency-description"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="Description"
              required
            ></textarea>
          </div>

          <div class="mb-4">
            <label class="mb-2 text-gray-700 block font-bold"
              >Package Image</label
            >
            <input
              @change="handleImageChange"
              type="file"
              accept="image/*"
              id="package-image"
              name="package-image"
              class="border rounded w-full mb-2 px-3 py-2"
              required
            />
          </div>
          <div class="text-center mt-6">
            <button
              type="submit"
              class="bg-blue-700 px-2 py-2 rounded-lg text-white hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
