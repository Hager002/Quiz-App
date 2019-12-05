import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Fragen from "./FragenNeu/FragenNeu";
import Timer from "../Home/Schwirigkeitsgrad/Timer";

export default function Gameboard({ topic, schwierigkeit, reset }) {
  return (
    <Fragment>
      <button onClick={reset} value="reset" />

      <Helmet>
        <title>Quiz-Gameboard</title>
      </Helmet>
      <div className="AAA">
        <div className="timer">{schwierigkeit === "schwer" ? <Timer /> : <div />}</div>
        <div className="questions">
          <Fragen topic={topic} schwierigkeit={schwierigkeit} />

          {/* ToDo: File in mehrere Componenten aufteilen: */}
          {/* DONE: Antworten: OptionA, OptionB, OptionC, OptionD */}
          {/* Done: Navigation: Buttons previous, next und quit */}
        </div>
      </div>
    </Fragment>
  );
}
