import React, { useState } from "react";
import NotificationDataService from "./components/services/NotificationDataService";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NotificationsList from "./components/notifications/NotificationsList.js";

function App() {
  //get list of notifications with axios
  const [notifications, setNotifications] = useState([]);

  if (notifications.length === 0) {
    NotificationDataService.getAll()
      .then((response) => {
        setNotifications(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <NotificationsList notifications={notifications} />
    </div>
  );
}

export default App;
