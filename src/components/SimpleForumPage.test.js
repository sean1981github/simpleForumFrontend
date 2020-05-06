import React from "react";
import {
  render,
  fireEvent,
  //within,
  waitFor,
  //waitForElement,
  //waitFor,
  //find,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SimpleForumPage from "./SimpleForumPage";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import mockTopicData from "../data/topics.data";
import { BrowserRouter } from "react-router-dom";

var mock = new MockAdapter(axios);

describe("SimpleForumPage", () => {
  beforeEach(() => {
    mock.onGet("http://localhost:3002/topics").reply(200, mockTopicData);
  });

  afterEach(() => {
    mock.reset();
  });

  it("should render all the topics (currently test data got 2 data only)", async () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <SimpleForumPage />
      </BrowserRouter>
    );

    await waitFor(() => getAllByTestId("oneTopic"));
    const allTopics = getAllByTestId("oneTopic");
    expect(allTopics).toHaveLength(2);
  });

  // it("onClick the comments link should render only 1 topic with 2 comments ", async () => {
  //   const { getAllByTestId, getByTestId, getByText } = render(
  //     <BrowserRouter>
  //       <SimpleForumPage />
  //     </BrowserRouter>
  //   );

  //   await waitFor(() => getAllByTestId("oneTopic"));
  //   await waitFor(() => getByText("3 Comments"));

  //   const linkClick = getByText("3 Comments");
  //   fireEvent.click(linkClick);

  //   await waitFor(() => getByTestId("oneTopicWithComments"));
  //   const oneTopicWithComments = getByTestId("oneTopicWithComments");
  //   expect(oneTopicWithComments).toBeInTheDocument();
  // });
});
