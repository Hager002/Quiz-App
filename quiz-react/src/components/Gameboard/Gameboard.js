import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Questions from "./FragenNeu/FragenNeu";
import Timer from "../../pages/Home/Schwirigkeitsgrad/Timer";
import './gameboard.css';

export default function Gameboard({quiz, topic, schwierigkeit, onReset}) {
  return (
    <div>
      <Fragment>
        <Helmet>
          <title>Quiz-Gameboard</title>
        </Helmet>
        <div className="gameboard_screen">
          <div className="timer">{schwierigkeit === "schwer" ? <Timer /> : <div />}</div>
          <div className="questions">
            <Questions quiz={quiz} topic={topic} schwierigkeit={schwierigkeit} onReset={onReset} />
          </div>
        </div>
      </Fragment>
    </div>
  );
}
