// src/components/EventItem.tsx
import React from "react";
import { Event } from "./EventsInfo";

interface EventItemProps {
  event: Event;
}

export const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <div className="event-item">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>
        <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
    </div>
  );
};


