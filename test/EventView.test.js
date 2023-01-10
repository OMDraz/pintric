import React from "react";
import ReactDOM from "react-dom/client";
import { eventData } from "../src/dummyData/events.js";
import { EventViewHero } from "../src/EventView/EventViewHero.js";
import { initializeReactContainer, render } from "./reactTestExtensions";

describe("Event View Hero", () => {
  // reset the container
  beforeEach(() => {
    initializeReactContainer();
  });

  it("renders an event form", () => {
    // Step 1 - create a component to host that data
    render(<EventViewHero event={eventData} />);

    // Step 3 - expect the data
    expect(document.body.textContent).not.toBeNull();
  });
  it("renders an event form with a specific name", () => {
    render(<EventViewHero event={eventData} />);

    expect(document.body.textContent).toContain("Event #2");
  });
  it("has a space for putting in photos", () => {
    render(<EventViewHero event={eventData} />);

    //Step 2 - check to see that there is an img tag
    expect(document.querySelector("img#eventPhoto")).not.toBeNull();
  });
  it("has a photo of a tourist event", () => {
    const url =
      "https://webunwto.s3.eu-west-1.amazonaws.com/2022-01/making-tourism-stronger-and-ready-for-the-future_0.jpg?VersionId=TVw01pVgj36eqWdGc4MwtC25QZwk4hcB";
    //Step 1 - create an event object
    const event2 = eventData;
    event2.imgURL = url;

    //Step 1 - set up the component
    render(<EventViewHero event={eventData} />);

    //Step 2 - check to see that there is an img tag
    expect(
      document.querySelector(
        "img[src='https://webunwto.s3.eu-west-1.amazonaws.com/2022-01/making-tourism-stronger-and-ready-for-the-future_0.jpg?VersionId=TVw01pVgj36eqWdGc4MwtC25QZwk4hcB']"
      )
    ).not.toBeNull();
  });
  it("has a small circle with the hosts photo below photo", () => {
    render(<EventViewHero event={eventData} />);
    //Step 3 - assertion
    expect(document.querySelector("img#hostPhoto")).not.toBeNull();
  });
  it("has another small circle with the first guest photo", () => {
    render(<EventViewHero event={eventData} />);

    expect(document.querySelector("img#guestPhoto")).not.toBeNull();
  });
  it("has a blurb mentioning the host", () => {
    render(<EventViewHero event={eventData} />);

    expect(document.querySelector("p#hostAttendance").textContent).toContain(
      "Hosted by"
    );
  });
  it("has a blurb mentioning who attended the event", () => {
    render(<EventViewHero event={eventData} />);

    expect(document.querySelector("p#guestAttendance").textContent).toContain(
      "Kareem, Reem and Ahmed attended the event"
    );
  });
  it("has a date stamp that is to the right of the guest photos", () => {
    render(<EventViewHero event={eventData} />);
    expect(document.querySelector("div#dateEvent")).not.toBeNull();
  });
  it("the date stamp adjusts based on how many days its been", () => {
    const date1 = new Date("2022-12-01");
    const date2 = new Date();
    const timeDifference = Math.floor(
      (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)
    );

    render(<EventViewHero event={eventData} />);
    expect(document.querySelector("div#dateEvent").textContent).toEqual(
      `Posted ${timeDifference} days ago`
    );
  });
});
