import React, { useState, Fragment } from "react";
import Thema from "./Thema/Thema";
import Schwierigkeitsgrad from "./Schwirigkeitsgrad/Schwierigkeitsgrad";
import { Helmet } from "react-helmet";
import Navigation from "../Navigation/Navigation";
import Gameboard from "../Gameboard/Gameboard";
import Uuid from 'uuid/v1';
import './home.scss'; 

export default function Home({}) {
  const [topic, setTopic] = useState();
  const [schwierigkeit, setSchwierigkeit] = useState();
  const [quiz, setQuiz] = useState();

  const startQuiz = () => {
    if (topic && schwierigkeit) {
      setQuiz(Uuid());
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title>Quiz App - Game</title>
      </Helmet>
      <div className="home_screen">
        {quiz ? (
          <Gameboard quiz={quiz} topic={topic} schwierigkeit={schwierigkeit} onReset={() => setQuiz()} />
        ) : (
          <div>
            <header>
              <div className="App-navi">
                <Navigation />
              </div>
            </header>
            <Thema onThemaChange={setTopic} />
            <Schwierigkeitsgrad onSchwierigkeitsChange={setSchwierigkeit} />
            <button className="button_start_quiz" onClick={startQuiz}>
              Start
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
}
