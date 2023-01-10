import React from "react";
import {
  initializeReactContainer,
  render,
  element,
} from "./reactTestExtensions";
import { EventViewComment } from "../src/EventView/EventViewComment";
import { data } from "./testData/comments";

describe("Comment Section", () => {
  beforeEach(() => {
    initializeReactContainer();
  });

  it("renders a comment", () => {
    render(<EventViewComment comment={data} />);
    expect(element("#eventViewComment")).not.toBeNull();
  });
  const itRendersFieldNameElement = (fieldName) => {
    it(`renders a comment with the ${fieldName}`, () => {
      render(<EventViewComment comment={data} />);
      expect(element(`#eventViewComment${fieldName}`)).not.toBeNull();
    });
  };
  const itRendersFieldNameValue = (fieldName) => {
    it(`renders a div for the comment with the ${fieldName}`, () => {
      render(<EventViewComment comment={data} />);
      const labelledValue = data["comments"][0][fieldName];
      expect(element(`#eventViewComment${fieldName}`)).toContainText(
        labelledValue
      );
    });
  };
  itRendersFieldNameElement("firstName");
  itRendersFieldNameValue("firstName");
  itRendersFieldNameElement("date");
  itRendersFieldNameValue("date");
  itRendersFieldNameElement("commentText");
  itRendersFieldNameValue("commentText");
  itRendersFieldNameElement("commentLikes");
  itRendersFieldNameValue("commentLikes");
});
