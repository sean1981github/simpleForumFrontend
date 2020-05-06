import React from "react";

import { Link } from "react-router-dom";
import "./DisplayOneTopic.css";

const OneTopic = function OneTopic({ topic }) {
  const { id, topicName, topicStarterName, comments } = topic;

  const strURL = "/topics/" + id;

  return (
    <div className="oneTopic" data-testid={"oneTopic"} key={id}>
      <div className="topicStarterName">{topicStarterName}</div>
      <div className="topicName">{topicName}</div>
      <div className="commentCount">
        <Link to={strURL}>{comments.length} Comments</Link>
      </div>
    </div>
  );
};

export default OneTopic;
