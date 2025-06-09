import { ref, onMounted } from "vue";
import http from "../http-common";
import { useRouter } from "vue-router";

export function usePackage(id) {
  const singlePackage = ref(null);
  const loading = ref(true);
  const error = ref(null);
  const router = useRouter();

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

  const deletePackage = async () => {
    try {
      loading.value = true;
      await http.delete(`/api/packages/${id}`);
      // bring user back to packages list upon successful delete
      router.push("/packages");
    } catch (err) {
      error.value =
        "Error deleting package: " + (err.message || "Unknown error");
      console.error("Error deleting Package: ", err);
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
    deletePackage,
  };
}
