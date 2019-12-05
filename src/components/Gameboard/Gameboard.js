import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Question from "./FragenNeu/FragenNeu";
import Timer from "../Home/Schwirigkeitsgrad/Timer";

export default function Gameboard({
  topic,
  schwierigkeit,
  reset,
  backButtonHandler,
  forwardButtonHandler,
  quitButtonHandler
}) {
  return (
    <div>
      <button className="reset" onClick={reset} value="reset">
        Reset
      </button>
      <Fragment>
        <Helmet>
          <title>Quiz-Gameboard</title>
        </Helmet>
        <div className="AAA">
          <div className="timer">{schwierigkeit === "schwer" ? <Timer /> : <div />}</div>
          <div className="questions">
            <Question
              topic={topic}
              schwierigkeit={schwierigkeit}
              backButtonHandler={backButtonHandler}
              forwardButtonHandler={forwardButtonHandler}
              quitButtonHandler={quitButtonHandler}
            />
          </div>
        </div>
      </Fragment>
    </div>
  );
}
