import React from "react";

const Notification = (props) => {
  return (
    <div className="col-md-12 card mb-2">
      <div className="card-body">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Notification;
