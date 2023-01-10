import React from "react";
import { eventData } from "../dummyData/events";

export const timeDifference = (firstDate) => {
  const secondDate = new Date();
  const timeDifference = Math.abs(
    Math.floor(
      (firstDate.getTime() - secondDate.getTime()) / (1000 * 3600 * 24)
    )
  );

  return timeDifference;
};

export const nameConcatenator = (array) => {
  return array.reduce((acc, curr, index) => {
    if (index === array.length - 1) {
      return acc + " and " + curr;
    } else {
      return acc + ", " + curr;
    }
  });
};

export const EventViewHero = (event) => {
  const { name, attendees, location, date, urlIMG } =
    event["event"]["events"][0];
  const daysAgo = timeDifference(date);
  const finalizedNames = nameConcatenator(attendees["guests"]);

  return (
    <div>
      <div id="eventName">{name}</div>
      <img id="eventPhoto" src={urlIMG} alt="" />
      <div>
        <div>
          <img id="hostPhoto" src={urlIMG} alt="" />
          <img id="guestPhoto" src={urlIMG} alt="" />
          <p id="hostAttendance">Hosted by {attendees["host"]}</p>
          <p id="guestAttendance">{finalizedNames} attended the event</p>
          <p id="location">{location}</p>
        </div>
        <div>
          <div id="dateEvent">Posted {daysAgo} days ago</div>
        </div>
      </div>
    </div>
  );
};

EventViewHero.defaultProps = {
  eventData,
};
