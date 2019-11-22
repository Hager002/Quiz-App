import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Fragen from "./FragenNeu/FragenNeu";
import Timer from "../Home/Schwirigkeitsgrad/Timer";

export class Gameboard extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Quiz-Gameboard</title>
        </Helmet>
        <div className="timer">
          <Timer />
        </div>
        <div className="questions">
          <Fragen />

          {/* ToDo: File in mehrere Componenten aufteilen: */}
          {/* Antworten: OptionA, OptionB, OptionC, OptionD */}
          {/* Navigation: Buttons previous, next und quit */}
        </div>
      </Fragment>
    );
  }
}
