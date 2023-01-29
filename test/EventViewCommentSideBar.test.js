import React from "react";
import {
  initializeReactContainer,
  render,
  element,
} from "./reactTestExtensions";
import { EventViewComment } from "../src/EventView/EventViewComment";
import { data } from "./testData/comments";
import { EventViewSideBar } from "./src/Eventview/EventViewSideBar";

describe("Comment Section", () => {
  beforeEach(() => {
    initializeReactContainer();
  });

  it("renders a sidebar", () => {
    render(<EventViewSideBar comments={data} />);
    expect(element("#eventViewBar")).not.toBeNull();
  });
});
