import React from 'react';
import "./Events.css";
import { events } from './EventsInfo';
import EventsList from './EventsList';

export const Events: React.FC = () => {
  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <EventsList events={events} />
    </div>
  );
};

