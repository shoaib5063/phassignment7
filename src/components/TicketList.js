import React from "react";
import TicketCard from "./TicketCard";

export default function TicketList({ tickets = [], onStartTask }) {
  if (tickets.length === 0) {
    return <div className="no-tickets">No tickets available.</div>;
  }

  return (
    <div className="ticket-grid">
      {tickets.map((t) => (
        <TicketCard key={t.id} ticket={t} onStart={() => onStartTask(t.id)} />
      ))}
    </div>
  );
}
