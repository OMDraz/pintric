import React from "react";
import { EventViewHero } from "./EventView/EventViewHero";
import { eventData } from "./dummyData/events.js";

export const App = () => {
  return <EventViewHero event={eventData} />;
};

export default App;
