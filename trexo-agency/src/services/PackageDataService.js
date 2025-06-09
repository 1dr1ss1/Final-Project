import http from "../http-common";
class PackageDataService {
  getAll() {
    return http.get("/api/packages");
  }
  create(data) {
    return http.post("/api/packages", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  get(id) {
    return http.get(`/api/packages/${id}`);
  }
  update(id, data) {
    return http.put(`/api/packages/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new PackageDataService();
