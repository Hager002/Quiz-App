import React from "react";

export default function AppThema({ onThemaChange }) {
  return (
    <section className="Thema">
      <h3> Das Thema </h3>

      <p>Such dir ein Thema aus.</p>

      <div className="radio">
        <label className="thema">
          <input type="radio" name="topic" id="topic1" onChange={e => onThemaChange(e.target.id)} /> Genetik
          und Gentechnik
        </label>
      </div>

      <div className="radio">
        <label className="thema">
          <input type="radio" name="topic" id="topic2" onChange={e => onThemaChange(e.target.id)} /> Pflanzen
        </label>
      </div>

      <div className="radio">
        <label className="thema">
          <input type="radio" name="topic" id="topic3" onChange={e => onThemaChange(e.target.id)} /> Leben im
          Meer
        </label>
      </div>
    </section>
  );
}
