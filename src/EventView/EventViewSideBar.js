import React from "react";
import { EventViewComment } from "./EventViewComment";
import { commentData } from "../dummyData/comments";

export const EventViewSideBar = (comment) => {
  return (
    <div
      id="eventViewBar"
      className="bg-slate-200 border-solid border-2 border-sky-500 col-start-5 col-end-7 row-start-1 row-end-5"
    >
      <EventViewComment data={commentData} />
    </div>
  );
};
