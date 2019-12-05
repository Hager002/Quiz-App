import React, { useState, Fragment } from "react";
import Thema from "./Thema/Thema";
import Schwierigkeitsgrad from "./Schwirigkeitsgrad/Schwierigkeitsgrad";
import { Helmet } from "react-helmet";
import Navigation from "../Navigation/Navigation";
import Logout from "../Benutzerformular/Logout";
import Gameboard from "../Gameboard/Gameboard";

export default function Home() {
  const [topic, setTopic] = useState();
  const [schwierigkeit, setSchwierigkeit] = useState();
  const [gameboard, setGameboard] = useState();
  const [quiz, setQuiz] = useState();

  const isNotEmpty = variable => variable;
  const startQuiz = () => setQuiz(isNotEmpty(topic) && isNotEmpty(schwierigkeit));

  return (
    <Fragment>
      <Helmet>
        <title>Quiz App - Game</title>
      </Helmet>
      <div className="AAA_home">
        <header>
          <div className="App-navi">
            <Navigation />
          </div>
        </header>

        {quiz ? (
          <Gameboard topic={topic} schwierigkeit={schwierigkeit} reset={() => setQuiz(false)} />
        ) : (
          <div id="home">
            <Thema onThemaChange={setTopic} />
            <Schwierigkeitsgrad onSchwierigkeitsChange={setSchwierigkeit} />
            <button className="StartQuiz" onClick={startQuiz}>
              Start
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
}
