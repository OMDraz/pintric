import React from "react";
import ReactDOM from "react-dom/client";
import {
  initializeReactContainer,
  render,
  element,
} from "./reactTestExtensions";
import { act } from "react-dom/test-utils";
import { EventViewComment } from "../src/EventView/EventViewComment";

describe("Comment Section", () => {
  const comment = {
    firstName: "",
    lastName: "",
    date: "",
    commentText: "",
    commentLikes: "",
    subComments: [
      {
        firstName: "",
        lastName: "",
        commentText: "",
      },
      {
        firstName: "",
        lastName: "",
        commentText: "",
      },
    ],
  };
  const eventViewComment = () => element("#eventViewComment");

  beforeEach(() => {
    initializeReactContainer();
  });

  it("renders a comment", () => {
    render(<EventViewComment />);
    expect(eventViewComment()).not.toBeNull();
  });
  it("renders a comment with a first name", () => {
    const comment = { firstName: "Ashley" };
    render(<EventViewComment comment={comment} />);
    expect(appointmentTable()).toContainText("Ashley");
  });
});
