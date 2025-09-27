import React from "react";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";

export default function Banner({ inProgressCount = 0, resolvedCount = 0 }) {
  return (
    <section className="banner">
      <div className="banner-inner container">
        <div className="banner-left">
          <h1 className="banner-title">Customer Support Zone</h1>
          <p className="banner-sub">Track and resolve customer tickets quickly.</p>
        </div>

        <div className="banner-stats">
          <div
            className="stat-card stat-inprogress"
            style={{
              backgroundImage: `linear-gradient(135deg, #7b41ff 0%, #b748ff 100%), url(${vector1})`
            }}
          >
            <div className="stat-title">In-Progress</div>
            <div className="stat-number">{inProgressCount}</div>
          </div>

          <div
            className="stat-card stat-resolved"
            style={{
              backgroundImage: `linear-gradient(135deg, #1bd58a 0%, #08b08b 100%), url(${vector2})`
            }}
          >
            <div className="stat-title">Resolved</div>
            <div className="stat-number">{resolvedCount}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

