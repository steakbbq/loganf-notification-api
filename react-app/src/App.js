import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NotificationsList from "./components/notifications/NotificationsList.js";

function App() {
  //generate an array called dummy data with 10 names
  const dummyData = [
    {
      _id: 1,
      title: "This is dummy notification 1",
      content: "This is dummy notification 1",
      displayAfter: new Date(),
      created_at: "2020-01-01",
      updated_at: "2020-01-01",
    },
    {
      _id: 2,
      title: "This is dummy notification 2",
      content: "This is dummy notification 2",
      displayAfter: new Date(),
      created_at: "2020-01-01",
      updated_at: "2020-01-01",
    },
    {
      _id: 3,
      title: "This is dummy notification 3",
      content: "This is dummy notification 3",
      displayAfter: new Date(),
      created_at: "2020-01-01",
      updated_at: "2020-01-01",
    },
    {
      _id: 4,
      title: "This is dummy notification 4",
      content: "This is dummy notification 4",
      displayAfter: new Date(),
      created_at: "2020-01-01",
      updated_at: "2020-01-01",
    },
    {
      _id: 5,
      title: "This is dummy notification 5",
      content: "This is dummy notification 5",
      displayAfter: new Date(),
      created_at: "2020-01-01",
      updated_at: "2020-01-01",
    },
  ];
  return (
    <div>
      <NotificationsList notifications={dummyData} />
    </div>
  );
}

export default App;
