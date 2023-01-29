import React from "react";
import { EventViewHero } from "./EventView/EventViewHero";
import { eventData } from "./dummyData/events.js";
import { EventViewSideBar } from "./EventView/EventViewSideBar";

export const App = () => {
  return (
    <html>
      <head>
        <link href="./assets/main.css" rel="stylesheet" />
      </head>
      <body>
        <div className="grid grid-cols-6 grid-rows-3 gap-2">
          <EventViewHero event={eventData} />;
          <EventViewSideBar />
        </div>
      </body>
    </html>
  );
};

export default App;
