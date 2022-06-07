import React from "react";
import Notification from "./Notification";

const ExpensesFilter = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Notifications</h1>
          <div>
            {props.notifications.map((notification) => (
              <Notification
                key={notification.id}
                title={notification.title}
                content={notification.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
