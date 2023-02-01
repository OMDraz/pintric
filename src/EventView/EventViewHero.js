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
    <div className="bg-slate-300 border-solid border-2 border-sky-500 col-start-2 col-end-6 row-start-1 row-end-4">
      <div className=" bg-white shadow-lg" id="eventName">
        <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
          {name}
        </p>
      </div>
      <div>
        <img id="eventPhoto" src={urlIMG} alt="" />
      </div>

      <div class="flex ">
        <div class="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div class="flex w-full items-center justify-between border-b pb-3">
            <div class="flex items-center space-x-3">
              <div class="h-8 w-8 rounded-full bg-slate-400">
                <img id="hostPhoto" src={pullURLs(hostID)} alt="" />
              </div>
              <div class="text-lg font-bold text-slate-700">
                Hosted by {attendees["host"]}
              </div>
            </div>
            <div class="flex items-center space-x-8">
              <div class="text-xs text-neutral-500">2 hours ago</div>
            </div>
          </div>
          <div class="mt-4 mb-6">
            <div class="mb-3 text-xl font-bold"></div>
            <div class="text-sm text-neutral-600">
              Posted {daysAgo} days ago and attended by {finalizedNames}
            </div>
            <div className="flex">
              {guestIds.map((guestID) => {
                const guestIMG = pullURLs(guestID);
                return (
                  <div key={guestID}>
                    <img
                      key={guestID}
                      id="guestPhoto"
                      src={guestIMG}
                      alt=""
                      className="w-12 h-12"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between text-slate-500">
              <div class="flex space-x-4 md:space-x-8">
                <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <span>125</span>
                </div>
                <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EventViewHero.defaultProps = {
  eventData,
};
