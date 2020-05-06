import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should renderNavLinks when the app loads", () => {
    const { getByText } = render(<App />);
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Topics")).toBeInTheDocument();
    expect(getByText("Error")).toBeInTheDocument();
  });
});
