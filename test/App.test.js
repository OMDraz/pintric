import React from "react";
import { toContainText } from "./matchers/toContainText";
import ReactDOM from "react-dom/client";
import {
  initializeReactContainer,
  render,
  element,
} from "./reactTestExtensions";
import { App } from "../src/App.js";

describe("App", () => {
  // reset the container
  beforeEach(() => {
    initializeReactContainer();
  });

  it("there is a root DOM element", () => {
    // Step 1 - create a component to host that data
    render(<App />);

    // Step 2 - expect the data
    expect(document.body).not.toBeNull();
  });
  it("the main event hero component is loaded", () => {
    //Step 1 - render the main component
    render(<App />);

    //Step 2 - check to see if the element for the event hero is on the page
    expect(element("#eventName")).not.toBeNull();
  });
});
