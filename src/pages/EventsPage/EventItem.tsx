// src/components/EventItem.tsx
import React from "react";
import { Event } from "./EventsInfo";
import logo from "../../assets/logo.png";

interface EventItemProps {
  event: Event;
}

export const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <div className="event-item">
      <h2>{event.title}</h2>
      <div className="event-details">
        <img src={logo} alt="event-picture" />
        <div className="event-details-text">
          <p>{event.description}</p>
          <p>
            <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <button className="cta-btn">Register Now!</button>
        </div>
      </div>
    </div>
  );
};
