//import React, { Component } from "react";

import React from "react";

import Draggable from "react-draggable";
import "./CommentPopUp.css";
class CommentPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "",
    };
  }

  handleChange = (event) => {
    this.setState({ commentText: event.target.value });
    //console.log(this.state.commentText); //for debugging purpose
  };

  addCommentToDB = () => {
    return this.props.addCommentToDB(this.state.commentText);
  };

  render() {
    return (
      <Draggable handle=".movable_div_header">
        <div className="popup">
          {/* <div className="popup_inner"> */}

          <div className="movable_div_header">
            <div>Click here to move</div>
            <button onClick={this.props.closePopup}> X </button>
          </div>

          <textarea
            onChange={this.handleChange}
            placeholder="Please input comment"
          ></textarea>

          <button onClick={this.addCommentToDB}>Add Comment</button>

          {/* </div> */}
        </div>
      </Draggable>
    );
  }
}
export default CommentPopUp;
