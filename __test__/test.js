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
    expect(document.body.textContent).not.toBeNull();
  });
  it("renders an event form with a specific name", () => {
    const component = <EventViewHero event={event} />;

    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

    expect(document.body.textContent).toContain("Event #2");
  });
  it("has a space for putting in photos", () => {
    //Step 1 - set up the component
    const component = <EventViewHero event={event} />;

    //Step 2 - render the component
    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

    //Step 2 - check to see that there is an img tag
    expect(document.querySelector("img#eventPhoto")).not.toBeNull();
  });
  it("has a photo of a tourist event", () => {
    const url =
      "https://webunwto.s3.eu-west-1.amazonaws.com/2022-01/making-tourism-stronger-and-ready-for-the-future_0.jpg?VersionId=TVw01pVgj36eqWdGc4MwtC25QZwk4hcB";
    //Step 1 - create an event object
    const event2 = event;
    event2.imgURL = url;

    //Step 1 - set up the component
    const component = <EventViewHero event={event2} />;

    //Step 2 - render the component
    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

    //Step 2 - check to see that there is an img tag
    expect(
      document.querySelector(
        "img[src='https://webunwto.s3.eu-west-1.amazonaws.com/2022-01/making-tourism-stronger-and-ready-for-the-future_0.jpg?VersionId=TVw01pVgj36eqWdGc4MwtC25QZwk4hcB']"
      )
    ).not.toBeNull();
  });
  it("has a small circle with the hosts photo below photo", () => {
    //Step 1 - set up the component
    const component = <EventViewHero event={event} />;

    //Step 2 - render the component
    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

    //Step 3 - assertion
    expect(document.querySelector("img#hostPhoto")).not.toBeNull();
  });
});
