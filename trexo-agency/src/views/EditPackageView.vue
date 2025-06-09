<script setup>
import { ref, onMounted } from "vue";
import PackageDataService from "../services/PackageDataService";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const submitted = ref(false);
const message = ref("");

const packageData = ref({
  destination: "",
  country: "",
  image: "",
  price: "",
  description: "",
  agency: {
    name: "",
    contactEmail: "",
    companyDescription: "",
  },
});

const handleSubmit = async () => {
  try {
    submitted.value = true;
    message.value = "Updating package...";

    // Create FormData object
    const formData = new FormData();

    // Add package data
    formData.append("destination", packageData.value.destination);
    formData.append("country", packageData.value.country);
    formData.append("price", packageData.value.price);
    formData.append("description", packageData.value.description);

    // Add agency data
    formData.append("agency[name]", packageData.value.agency.name);
    formData.append(
      "agency[contactEmail]",
      packageData.value.agency.contactEmail
    );
    formData.append(
      "agency[companyDescription]",
      packageData.value.agency.companyDescription
    );

    // Add image file if it exists
    if (packageData.value.imageFile) {
      formData.append("image", packageData.value.imageFile);
    }

    console.log("Sending form data...");
    const response = await PackageDataService.update(route.params.id, formData);
    console.log("Package updated:", response.data);
    message.value = "Package updated successfully!";

    // Redirect to packages list after 2 seconds
    setTimeout(() => {
      router.push("/packages");
    }, 2000);
  } catch (error) {
    console.error("Error updating package:", error);
    submitted.value = false;
    message.value = "Error updating package. Please try again.";
  }
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Store the file object for later upload
    packageData.value.imageFile = file;

    // Create a preview URL for the image
    packageData.value.image = URL.createObjectURL(file);
  }
};
onMounted(async () => {
  try {
    console.log("Fetching package with ID:", route.params.id);
    const response = await PackageDataService.get(route.params.id);
    console.log("Received package data:", response.data);
    packageData.value = response.data;
  } catch (error) {
    console.error("Error fetching package:", error);
    message.value =
      "Error loading package data: " +
      (error.response?.data?.message || error.message);
  }
});
</script>

<template>
  <section class="bg-blue-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 mb-4 shadow-md py-5 rounded-md m-4 md:m-0">
        <form @submit.prevent="handleSubmit">
          <!-- Status Message -->
          <div
            v-if="message"
            :class="[
              'mb-4 p-4 rounded',
              submitted
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700',
            ]"
          >
            {{ message }}
          </div>

          <h2 class="text-3xl text-center font-semibold mb-6 mt-4">
            Edit Package
          </h2>

          <!-- Package Info Section -->
          <h3 class="text-2xl font-semibold text-blue-700 mb-4">
            Package Info
          </h3>

          <div class="mb-4">
            <input
              v-model="packageData.destination"
              type="text"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="City"
              required
            />
          </div>

          <div class="mb-4">
            <input
              v-model="packageData.country"
              type="text"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="Country"
              required
            />
          </div>

          <div class="mb-4">
            <input
              v-model="packageData.price"
              type="number"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="Price for 10 days"
              required
            />
          </div>

          <div class="mb-4">
            <textarea
              v-model="packageData.description"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="Package Description"
              required
            ></textarea>
          </div>

          <!-- Agency Info Section -->
          <h3 class="text-2xl font-semibold text-blue-700 mb-4">Agency Info</h3>

          <div class="mb-4">
            <input
              v-model="packageData.agency.name"
              type="text"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="Agency Name"
              required
            />
          </div>

          <div class="mb-4">
            <input
              v-model="packageData.agency.contactEmail"
              type="email"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="Email"
              required
            />
          </div>

          <div class="mb-4">
            <textarea
              v-model="packageData.agency.companyDescription"
              class="border rounded w-full mb-2 px-3 py-2"
              placeholder="Description"
              required
            ></textarea>
          </div>

          <!-- Image Upload Section -->
          <div class="mb-4">
            <label class="mb-2 text-gray-700 block font-bold">
              Package Image
            </label>
            <input
              @change="handleImageChange"
              type="file"
              accept="image/*"
              class="border rounded w-full mb-2 px-3 py-2"
            />
            <img
              v-if="packageData.image"
              :src="packageData.image"
              class="mt-2 max-h-40 object-contain"
              alt="Package preview"
            />
          </div>

          <!-- Submit Button -->
          <div class="text-center mt-6">
            <button
              type="submit"
              class="bg-blue-700 px-2 py-2 rounded-lg text-white hover:bg-blue-500"
              :disabled="submitted"
            >
              {{ submitted ? "Updating..." : "Update Package" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
