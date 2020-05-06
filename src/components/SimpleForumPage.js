import React from "react";
import { AllTopics } from "./DisplayTopics";
import axios from "axios";

class SimpleForumPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicDisplay: [],
    };
  }

  fetchForumDataViaAPI = () => {
    const URL = "http://localhost:3002/topics";
    console.log(`Fetch ${URL} from backend using axios`);

    axios.get(URL).then((res) => {
      console.log("axios return result:", res.data);
      this.setState({
        topicDisplay: res.data,
      });
    });
  };

  componentDidMount() {
    this.fetchForumDataViaAPI();
  }

  render() {
    return (
      <div>
        <div className="App">
          <AllTopics
            topics={this.state.topicDisplay}
            key={this.state.topicDisplay.map((obj) => Object.values(obj)[1])}
          />
        </div>
      </div>
    );
  }
}

export default SimpleForumPage;
