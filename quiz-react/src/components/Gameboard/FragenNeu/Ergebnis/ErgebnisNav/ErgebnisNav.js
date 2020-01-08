import React from "react";
import './ergebnisNav.css';
import CloseIcon from '@material-ui/icons/Close';

export default function ErgebnisNav({ onReset }) {
  return (
    <div>
      <div className="button-container">
        <button className="ergebnis-nav" name="reset" onClick={onReset}><CloseIcon /><br />Neustart</button>
      </div>
    </div>
  );
}