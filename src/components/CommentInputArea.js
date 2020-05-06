import React from "react";

class CommentInputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "",
    };
  }

  handleChange = (event) => {
    this.setState({ commentText: event.target.value });
    console.log(this.state.commentText); //for debugging purpose
  };

  addCommentToDB = () => {
    return this.props.addCommentToDB(this.state.commentText);
  };

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange}></textarea>

        <button onClick={this.addCommentToDB}>Add Comment</button>
      </div>
    );
  }
}
export default CommentInputArea;
