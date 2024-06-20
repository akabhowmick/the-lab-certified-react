// src/components/EventsList.tsx
import React from "react";
import { Event } from "./EventsInfo";
import { EventItem } from "./EventItem";

interface EventsListProps {
  events: Event[];
}

const EventsList: React.FC<EventsListProps> = ({ events }) => {
  return (
    <div className="events-list">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsList;
