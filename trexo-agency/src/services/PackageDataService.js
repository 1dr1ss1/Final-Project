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
}

export default new PackageDataService();
