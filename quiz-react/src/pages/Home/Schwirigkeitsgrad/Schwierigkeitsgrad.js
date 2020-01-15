import React from "react";
import './schwierigkeitsgrad.css'; 

export default function AppSchwierigkeitsgrad({ onSchwierigkeitsChange }) {
  return (
    <section className="Schwierigkeit">
      <h3 role="heading"> Die Schwierigkeitsstufe </h3>
      <p>Such dir eine Schwierigkeitsstufe aus.</p>
      
      <label className="schwierigkeit" tabindes="0">
      <input type="radio" name="schwierigkeit" id="leicht" className="schwierigkeit"
        onChange={e => onSchwierigkeitsChange(e.target.id)}/> leicht </label> <br /> 
      
      <label className="schwierigkeit" tabindes="0">
      <input type="radio" name="schwierigkeit" id="schwer"
        onChange={e => onSchwierigkeitsChange(e.target.id)}/> schwer </label> <br />
    </section>
  );
}
