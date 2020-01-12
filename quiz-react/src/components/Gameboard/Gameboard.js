import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import Questions from "./FragenNeu/FragenNeu";
import Timer from "../../pages/Home/Schwirigkeitsgrad/Timer";
import './gameboard.css';

export default function Gameboard({quiz, topic, schwierigkeit, onReset, anzahl }) {

  return (
    <div>
      <Fragment>
        <Helmet>
          <title>Quiz-Gameboard</title>
        </Helmet>
        <div className="gameboard_screen">
          
          {/*   Kontext anzeigen   */}
          <p>{topic}</p>
          <p>Frage {anzahl} von {anzahl} </p>  
          <div className="timer">{schwierigkeit === "schwer" ? <Timer /> : <div />}</div>
          <div className="questions">
            <Questions quiz={quiz} topic={topic} schwierigkeit={schwierigkeit} onReset={onReset} />
          </div>
        </div>
      </Fragment>
    </div>
  );
}
