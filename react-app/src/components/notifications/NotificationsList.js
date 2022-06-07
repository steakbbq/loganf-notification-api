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
                title={notification.title}
                content={notification.content}
                displayAfter={notification.displayAfter}
                created_at={notification.created_at}
                updated_at={notification.updated_at}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
