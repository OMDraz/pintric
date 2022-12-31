import React from "react";

const timeDifference = (firstDate) => {
  const secondDate = new Date();

  const timeDifference = Math.abs(
    Math.floor(
      (firstDate.getTime() - secondDate.getTime()) / (1000 * 3600 * 24)
    )
  );

  return timeDifference;
};

export const EventViewHero = ({ event }) => {
  const daysAgo = timeDifference(event["date"]);

  return (
    <div>
      <div>{event.name}</div>
      <img id="eventPhoto" src={event.imgURL} />
      <div>
        <div>
          <img id="hostPhoto" src={event.imgURL} />
          <img id="guestPhoto" src={event.imgURL} />
          <p id="attendance">attended the event</p>
        </div>
        <div>
          <div id="dateEvent">Posted {daysAgo} days ago</div>
        </div>
      </div>
    </div>
  );
};
