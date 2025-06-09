<script setup>
import PackageDataService from "../services/PackageDataService";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const submitted = ref(false);
const message = ref("");

const newPackage = ref({
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
    message.value = "Creating package...";

    // Create FormData object
    const formData = new FormData();

    // Add package data
    formData.append("destination", newPackage.value.destination);
    formData.append("country", newPackage.value.country);
    formData.append("price", newPackage.value.price);
    formData.append("description", newPackage.value.description);

    // Add agency data
    formData.append("agency[name]", newPackage.value.agency.name);
    formData.append(
      "agency[contactEmail]",
      newPackage.value.agency.contactEmail
    );
    formData.append(
      "agency[companyDescription]",
      newPackage.value.agency.companyDescription
    );

    // Add image file if it exists
    if (newPackage.value.imageFile) {
      formData.append("image", newPackage.value.imageFile);
    }

    console.log("Sending form data...");
    const response = await PackageDataService.create(formData);
    console.log("Package created:", response.data);
    message.value = "Package created successfully!";

    // Reset form
    newPackage.value = {
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
    };
    newPackage.value.imageFile = null;

    // Redirect to packages list after 2 seconds
    setTimeout(() => {
      router.push("/packages");
    }, 2000);
  } catch (error) {
    console.error("Error creating package:", error);
    submitted.value = false;
    message.value = "Error creating package. Please try again.";
  }
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Store the file object for later upload
    newPackage.value.imageFile = file;

    // Create a preview URL for the image
    newPackage.value.image = URL.createObjectURL(file);
  }
};
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
              :disabled="submitted"
            >
              {{ submitted ? "Creating..." : "Submit" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
