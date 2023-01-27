//hello world

import React from "react";
import { eventData } from "../dummyData/events";
import { useEffect } from "react";
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
          className="flex justify-center"
          id="eventPhoto"
          src={urlIMG}
          alt=""
          class="object-contain"
        />
      </div>
      <div>
        <div>
          <div className="flex justify-start content-end">
            <img
              id="hostPhoto"
              src={pullURLs(hostID)}
              alt=""
              className="rounded-full h-12 w-12"
            />
            <p className="font-serif self-end" id="hostAttendance">
              Hosted by {attendees["host"]}
            </p>
          </div>
          <div class="flex content-end my-5">
            {guestIds.map((guestID) => {
              const guestIMG = pullURLs(guestID);
              return (
                <img
                  key={guestID}
                  id="guestPhoto"
                  src={guestIMG}
                  alt=""
                  class="font-serif h-12 w-12 mx-4 rounded-full"
                />
              );
            })}
          </div>
          <p id="guestAttendance" class="font-serif ">
            {finalizedNames} attended the event
          </p>
          <p id="location" class="font-serif">
            {location}
          </p>
        </div>
        <div>
          <div id="dateEvent" class="font-serif">
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
