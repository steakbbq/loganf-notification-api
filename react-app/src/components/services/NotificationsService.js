import http from "../http-common";
class NotificationService {
  getAll() {
    return http.get("/notifications");
  }
}
export default new NotificationService();
