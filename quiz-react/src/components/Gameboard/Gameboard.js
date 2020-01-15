import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Questions from "./FragenNeu/FragenNeu";
import Timer from "../../pages/Home/Schwirigkeitsgrad/Timer";
import './gameboard.css';
import axios from "../axios";

export default function Gameboard({quiz, topic, topicName, schwierigkeit, onReset, anzahl }) {

  return (
    <div>
      <Fragment>
        <Helmet>
          <title>Quiz-Gameboard</title>
        </Helmet>
        <div className="gameboard_screen"> 
          <div className="timer">{schwierigkeit === "schwer" ? <Timer /> : <div />}</div>
          <div className="questions">
            <Questions quiz={quiz} topic={topic} topicName={topicName} schwierigkeit={schwierigkeit} onReset={onReset} />
          </div>
        </div>
      </Fragment>
    </div>
  );
}
