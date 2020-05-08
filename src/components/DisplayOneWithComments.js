import React from "react";

import "./DisplayOneWithComments.css";
import CommentInputArea from "./CommentInputArea";
import axios from "axios";

class OneTopicWithComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedComment: "",
    };
  }

  handleChange = async (commentText) => {
    const commentToAdd = commentText;

    if (commentToAdd !== "") {
      const newCommentFrDB = await this.postForumDataViaAPI(commentToAdd);
      this.props.addComment(newCommentFrDB); // this is the part to update the props for refresh
    }
  };

  postForumDataViaAPI = async (commentText) => {
    console.log("postForumDataViaAPI");
    const { topic } = this.props;
    const { id, ...restOfTopic } = topic;

    const URL = `https://simple-forum-backend.herokuapp.com/topics/${id}/comments`;
    const data = { comment: commentText };

    console.log("URL:", URL);

    const res = await axios.post(URL, data);
    console.log("inside axios ", res.data);
    this.setState({
      isLoading: true,

      updatedComment: res.data,
    });
    return res.data;
  };

  render() {
    const { topic } = this.props;
    const { id, topicName, topicStarterName, comments } = topic;
    console.log("comments", comments);

    return (
      <div
        className="oneTopicWithComments"
        data-testid={"oneTopicWithComments"}
        key={id}
      >
        <div className="topicStarterName">{topicStarterName}</div>
        <div className="topicName">{topicName}</div>

        <div className="addCommentArea">
          <CommentInputArea addCommentToDB={this.handleChange} />
        </div>

        <div className="commentPlaceHolder">
          {comments.map((commentVar) => {
            return (
              <div className="comment" key={commentVar.id}>
                {commentVar.comment}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default OneTopicWithComments;
