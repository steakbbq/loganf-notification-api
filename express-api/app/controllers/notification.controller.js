const db = require("../models");
const Notification = db.notifications;

// Create and Save a new Notification
exports.create = (req, res) => {
  // Create a notification
  const newNotification = new Notification({
    title: req.body.title,
    content: req.body.content,
  });
  // Save notification in the database
  newNotification
    .save(newNotification)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Notification.",
      });
    });
};

// Retrieve all Notifications from the database.
exports.findAll = (req, res) => {
  Notification.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving notifications.",
      });
    });
};

// Delete all Notifications from the database.
exports.deleteAll = (req, res) => {
  Notification.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} notifications were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all notifications.",
      });
    });
};

// Generate dummy Notifications for the database.
exports.generate = (req, res) => {
  const dummyNotifications = [
    {
      title: "Notification 1",
      content: "This is the content of Notification 1",
    },
    {
      title: "Notification 2",
      content: "This is the content of Notification 2",
    },
    {
      title: "Notification 3",
      content: "This is the content of Notification 3",
    },
    {
      title: "Notification 4",
      content: "This is the content of Notification 4",
    },
    {
      title: "Notification 5",
      content: "This is the content of Notification 5",
    },
  ];

  Notification.deleteMany({})
    .then((data) => {
      Notification.insertMany(dummyNotifications)
        .then((data) => {
          res.send({
            message: `${data.length} notifications were generated successfully!`,
          });
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message ||
              "Some error occurred while generating dummy notifications.",
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all notifications.",
      });
    });
};
