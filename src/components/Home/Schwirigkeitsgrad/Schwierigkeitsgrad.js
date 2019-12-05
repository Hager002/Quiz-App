import React from "react";
import Timer from "./Timer";

export default function AppSchwierigkeitsgrad({ onSchwierigkeitsChange }) {
  return (
    <section className="Schwierigkeit">
      <h3> Die Schwierigkeitsstufe </h3>
      <p>Such dir eine Schwierigkeitsstufe aus.</p>
      <input
        type="radio"
        name="schwierigkeit"
        id="leicht"
        onChange={e => onSchwierigkeitsChange(e.target.id)}
      />
      leicht <br />
      <input
        type="radio"
        name="schwierigkeit"
        id="schwer"
        onChange={e => onSchwierigkeitsChange(e.target.id)}
      />{" "}
      schwer <br />
    </section>
  );
}
