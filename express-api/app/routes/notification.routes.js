module.exports = (app) => {
  const notifications = require("../controllers/notification.controller.js");
  var router = require("express").Router();

  // Create a new Notification
  router.post("/", notifications.create);

  // Retrieve all Notifications
  router.get("/", notifications.findAll);

  // delete all Notifications
  router.delete("/", notifications.deleteAll);

  // Generate Dummy Notifications
  router.get("/generate", notifications.generate);

  app.use("/api/notifications", router);
};
