import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Questions from "./FragenNeu/FragenNeu";
import Timer from "../../pages/Home/Schwirigkeitsgrad/Timer";
import './gameboard.css';

export default function Gameboard({quiz, topic, schwierigkeit, onReset, anzahl, currentQuestionIndex}) {
  return (
    <div>
      <Fragment>
        <Helmet>
          <title>Quiz-Gameboard</title>
        </Helmet>
        <div className="gameboard_screen">
          {/* <p>{topic}</p>
          <p>Frage <span>{currentQuestionIndex}</span> von <span>{anzahl}</span></p>  */}
          <div className="timer">{schwierigkeit === "schwer" ? <Timer /> : <div />}</div>
          <div className="questions">
            <Questions quiz={quiz} topic={topic} schwierigkeit={schwierigkeit} onReset={onReset} />
          </div>
        </div>
      </Fragment>
    </div>
  );
}
