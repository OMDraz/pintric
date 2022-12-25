import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { EventViewHero } from "../src/EventView/EventViewHero.js";

describe("Event View Hero", () => {
  const event = {
    name: "Event #2",
    attendees: {
      host: "Omar",
      guests: ["Kareem", "Reem", "Ahmed"],
    },
    location: "Markham",
  };

  // create a container
  let container;

  // reset the container
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  it("renders an event form", () => {
    // Step 1 - create a component to host that data
    const component = <EventViewHero event={event} />;
    // Step 2 - render that data in the DOM
    act(() => {
      ReactDOM.createRoot(container).render(component);
    });
    // Step 3 - expect the data
    expect(document.body.textContent).toContain("Event #1");
  });
  it("renders an event form with a different name", () => {
    const component = <EventViewHero event={event} />;

    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

    expect(document.body.textContent).toContain("Event #2");
  });
  it("has a photo showcasing the event", () => {});
});
