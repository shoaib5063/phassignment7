import React from "react";

export default function TaskStatus({ inProgress = [], resolved = [], onComplete }) {
  return (
    <div className="task-status">
      <h3>Task Status</h3>
      <p className="muted">Select a ticket to add to Task Status</p>

      <div className="task-section">
        <h4>In Progress</h4>
        {inProgress.length === 0 ? (
          <div className="empty">No tasks in progress</div>
        ) : (
          inProgress.map((t) => (
            <div key={t.id} className="task-row">
              <div className="task-title">{t.title}</div>
              <button className="btn btn-complete" onClick={() => onComplete(t.id)}>
                Complete
              </button>
            </div>
          ))
        )}
      </div>

      <div className="task-section resolved-section">
        <h4>Resolved</h4>
        {resolved.length === 0 ? (
          <div className="empty">No resolved tasks yet</div>
        ) : (
          resolved.map((t) => (
            <div key={t.id} className="resolved-row">
              <span className="resolved-title">{t.title}</span>
              <span className="resolved-date">{t.createdAt}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
