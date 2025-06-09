import { ref, onMounted } from "vue";
import http from "../http-common";

export function usePackages() {
  const packages = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const fetchPackages = async () => {
    try {
      loading.value = true;
      const response = await http.get("api/packages");
      packages.value = response.data;
      error.value = null;
    } catch (err) {
      (error.value = "Error loading packages"),
        +(err.message || "Unknown error");
      console.error("Error fetching packages:", err);
    } finally {
      loading.value = false;
    }
  };
  onMounted(() => {
    fetchPackages();
  });

  return {
    packages,
    loading,
    error,
    fetchPackages,
  };
}
