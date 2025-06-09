import http from "../http-common";
class ProductDataService {
  getAll() {
    return http.get("/api/packages");
  }
}
