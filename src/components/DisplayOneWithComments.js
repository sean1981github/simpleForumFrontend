import React from "react";

import "./DisplayOneWithComments.css";
import CommentPopUp from "./CommentPopUp";
import axios from "../utils/axios";

class OneTopicWithComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedComment: "",
      showPopup: false,
    };
  }

  togglePopup() {
    console.log("showPopup:", this.state.showPopup);
    this.setState({
      showPopup: !this.state.showPopup,
    });
    console.log("togglePopup:", this.state.showPopup);
  }

  handleChange = async (commentText) => {
    const commentToAdd = commentText;

    if (commentToAdd !== "") {
      const newCommentFrDB = await this.postForumDataViaAPI(commentToAdd);
      this.props.addComment(newCommentFrDB); // this is the part to update the props for refresh
      this.togglePopup();
    }
  };

  postForumDataViaAPI = async (commentText) => {
    //console.log("postForumDataViaAPI");
    const { topic } = this.props;
    const { id, ...restOfTopic } = topic;

    const URL = `/topics/${id}/comments`;
    const data = { comment: commentText };

    // console.log("URL:", URL);

    const res = await axios.post(URL, data);
    //console.log("inside axios ", res.data);
    this.setState({
      isLoading: true,

      updatedComment: res.data,
    });
    return res.data;
  };

  render() {
    const { topic } = this.props;
    const { id, topicName, topicStarterName, comments } = topic;
    //console.log("comments", comments);

    return (
      <div
        className="oneTopicWithComments"
        data-testid={"oneTopicWithComments"}
        key={id}
      >
        <div className="topicStarterName">{topicStarterName}</div>
        <div className="topicName">{topicName}</div>

        <div className="commentPlaceHolder">
          <div className="commentActionArea">
            <button onClick={this.togglePopup.bind(this)}>
              + Comments
              {/* <CommentInputArea addCommentToDB={this.handleChange} /> */}
            </button>
            {console.log("this.state.showPopup", this.state.showPopup)}
            {this.state.showPopup ? (
              <CommentPopUp
                addCommentToDB={this.handleChange}
                closePopup={this.togglePopup.bind(this)}
              />
            ) : null}
          </div>
          <div className="commentDisplayArea">
            {comments.map((commentVar) => {
              return (
                <div className="comment" key={commentVar.id}>
                  {commentVar.comment}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default OneTopicWithComments;
