import React from "react";
import DisplayOneTopic from "./DisplayOneTopic";
import DisplayOneWithComments from "./DisplayOneWithComments";

export const AllTopics = ({ topics }) => {
  console.log("All topics:", topics);
  return topics.map((selectedData) => {
    return <DisplayOneTopic topic={selectedData} key={selectedData.id} />;
  });
};

export const ViewComments = ({ topic, addComment }) => {
  console.log("View individual topic:", topic);
  console.log("comments to add:", addComment);
  if (Object.entries(topic).length !== 0) {
    return <DisplayOneWithComments topic={topic} addComment={addComment} />;
  } else {
    return <div />;
  }
};

export default { AllTopics, ViewComments };
