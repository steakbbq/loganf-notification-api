import httpCommon from "../../http-common";
class NotificationDataService {
  async getAll() {
    return httpCommon.get("/notifications");
  }
}
export default new NotificationDataService();
