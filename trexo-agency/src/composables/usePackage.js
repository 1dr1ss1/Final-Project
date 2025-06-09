import { ref, onMounted } from "vue";
import http from "../http-common";

export function usePackage(id) {
  const singlePackage = ref(null);
  const loading = ref(true);
  const error = ref(null);

  const fetchPackage = async () => {
    try {
      loading.value = true;
      const response = await http.get(`/api/packages/${id}`);
      singlePackage.value = response.data;
      error.value = null;
    } catch (err) {
      error.value =
        "Error loading package: " + (err.message || "Unknown error");
      console.error("Error fetching package: ", error);
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchPackage();
  });

  return {
    singlePackage,
    loading,
    error,
    fetchPackage,
  };
}
