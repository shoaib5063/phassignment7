import React from "react";

export default function TicketCard({ ticket, onStart }) {
  return (
    <div className="ticket-card">
      <div className="card-head">
        <div className="ticket-id">{ticket.id}</div>
        <div className={`priority-pill ${ticket.priority.toLowerCase()}`}>
          {ticket.priority}
        </div>
      </div>

      <h3 className="ticket-title">{ticket.title}</h3>

      <p className="ticket-desc">{ticket.description}</p>

      <div className="card-meta">
        <div className="meta-left">
          <div className="customer">{ticket.customer}</div>
          <div className="date">{ticket.createdAt}</div>
        </div>

        <div className="meta-right">
          <button className="btn btn-ghost" onClick={onStart}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
