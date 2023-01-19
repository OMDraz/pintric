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
    <div className="border-solid border-2 border-red-500 col-start-2 col-end-6 row-start-1 row-end-5">
      <div className="flex justify-center" id="eventName">
        <p className="text-green-500">{name}</p>
      </div>
      <div>
        <img
          className="flex justify-center"
          id="eventPhoto"
          src={urlIMG}
          alt=""
          class="w-1/2 h-1/2"
        />
      </div>
      <div>
        <div>
          <div className="flex justify-start content-end">
            <img
              id="hostPhoto"
              src={pullURLs(hostID)}
              alt=""
              className="rounded-full h-10 w-10"
            />
            <p className="self-end" id="hostAttendance">
              Hosted by {attendees["host"]}
            </p>
          </div>
          {guestIds.map((guestID) => {
            const guestIMG = pullURLs(guestID);
            return (
              <div class="h-1 w-1">
                <img
                  key={guestID}
                  id="guestPhoto"
                  src={guestIMG}
                  alt=""
                  class="object-fill rounded-full"
                />
              </div>
            );
          })}
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
