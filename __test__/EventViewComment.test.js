import React from "react";
import ReactDOM from "react-dom/client";
import {
  initializeReactContainer,
  render,
  element,
} from "./reactTestExtensions";
import { act } from "react-dom/test-utils";
import { EventViewComment } from "../src/EventView/EventViewComment";
import { data } from "./testData/comments";

describe("Comment Section", () => {
  const eventViewComment = () => element("#eventViewComment");

  beforeEach(() => {
    initializeReactContainer();
  });

  it("renders a comment", () => {
    render(<EventViewComment />);
    expect(eventViewComment()).not.toBeNull();
  });
  it("renders a comment with a first name", () => {
    const comment = data["comments"][0]["firstName"];
    render(<EventViewComment comment={comment} />);
    expect(eventViewComment()).toContainText("Ashley");
  });
});
