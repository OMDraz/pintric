import React from "react";

export const timeDifference = (firstDate) => {
  const secondDate = new Date();

  const timeDifference = Math.abs(
    Math.floor(
      (firstDate.getTime() - secondDate.getTime()) / (1000 * 3600 * 24)
    )
  );

  return timeDifference;
};

export const eventData = {
  events: [
    {
      name: "John",
      host: "Doe",
      imgURL: "01/01/2022",
      date: "This is a great article!",
      attendees: [],
    },
  ],
};

export const EventViewHero = (event) => {
  const { name, host, imgURL, date, attendees } = eventData["events"][0];
  console.log(name);
  const daysAgo = timeDifference(date);

  return (
    <div>
      <div id="eventName">{name}</div>
      <img id="eventPhoto" src={imgURL} alt="" />
      <div>
        <div>
          <img id="hostPhoto" src={imgURL} alt="" />
          <img id="guestPhoto" src={imgURL} alt="" />
          <p id="attendance">Hosted by {host}</p>
          <p id="attendance">{attendees} attended the event</p>
        </div>
        <div>
          <div id="dateEvent">Posted {daysAgo} days ago</div>
        </div>
      </div>
    </div>
  );
};
