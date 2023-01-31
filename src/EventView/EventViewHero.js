//hello world

import React from "react";
import { eventData } from "../dummyData/events";
import { consumerData } from "../dummyData/consumer";

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
  const { host, hostID, guests, guestIds } = attendees;
  const daysAgo = timeDifference(date);
  const finalizedNames = nameConcatenator(attendees["guests"]);

  const pullURLs = (id) => {
    const array = consumerData["consumers"];
    const result = array.filter((consumer) => consumer.id === id);
    const resultPhoto = result[0]["photo"];
    return resultPhoto;
  };

  return (
    <div className="bg-slate-300 border-solid border-2 border-sky-500 col-start-2 col-end-6 row-start-1 row-end-5">
      <div className="flex justify-center" id="eventName">
        <p className="font-serif text-decoration-solid">{name}</p>
      </div>
      <div>
        <img
          className="flex justify-center object-contain"
          id="eventPhoto"
          src={urlIMG}
          alt=""
        />
      </div>
      <div>
        <div>
          <div className="flex justify-start content-end">
            <img
              id="hostPhoto"
              src={pullURLs(hostID)}
              alt=""
              className="rounded-full h-6 w-6"
            />
            <p className="font-serif self-end" id="hostAttendance">
              Hosted by {attendees["host"]}
            </p>
          </div>
          {guestIds.map((guestID) => {
            const guestIMG = pullURLs(guestID);
            return (
              <div key={guestID} className="h-1 w-1">
                <img
                  key={guestID}
                  id="guestPhoto"
                  src={guestIMG}
                  alt=""
                  className="font-serif object-fill rounded-full"
                />
              </div>
            );
          })}
          <p id="guestAttendance" className="font-serif ">
            {finalizedNames} attended the event
          </p>
          <p id="location" className="font-serif">
            {location}
          </p>
        </div>
        <div>
          <div id="dateEvent" className="font-serif">
            Posted {daysAgo} days ago
          </div>
        </div>
      </div>
    </div>
  );
};

EventViewHero.defaultProps = {
  eventData,
};
