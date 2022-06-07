import httpCommon from "../../http-common";
class NotificationDataService {
  getAll() {
    return httpCommon.get("/notifications");
  }
}
export default new NotificationDataService();
