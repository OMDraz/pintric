import React from "react";

export const EventViewHero = ({ event }) => {
  return (
    <div>
      <div>{event.name}</div>
      <img id="eventPhoto" src={event.imgURL} />
    </div>
  );
};
