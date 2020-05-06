import React from "react";
import { ViewComments } from "./DisplayTopics";
import axios from "axios";

class CommentViewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicDisplay: {},
    };
  }

  addCommentToTopicDisplay = (newComment) => {
    if (newComment !== "") {
      console.log("newComment", newComment);
      const newTopicDisplay = { ...this.state.topicDisplay };
      newTopicDisplay.comments.push(newComment);
      console.log("newTopicDisplay", newTopicDisplay);

      this.setState({ topicDisplay: newTopicDisplay });
    }
  };

  fetchForumDataViaAPI = () => {
    // this.setState({ isLoading: true });
    console.log("Loading here");
    const { id } = this.props.match.params;
    const URL = `http://localhost:3002/topics/${id}`;

    console.log("URL:", URL);

    axios.get(URL).then((res) => {
      console.log("inside axios ", res.data);
      this.setState({
        //isLoading: false,

        topicDisplay: res.data,
      });
    });
  };

  componentDidMount() {
    console.log("in component did mount");
    this.fetchForumDataViaAPI();
  }

  render() {
    return (
      <div>
        <div className="App">
          <ViewComments
            topic={this.state.topicDisplay}
            key={this.state.topicDisplay.id}
            addComment={this.addCommentToTopicDisplay}
          />
        </div>
      </div>
    );
  }
}

export default CommentViewPage;
