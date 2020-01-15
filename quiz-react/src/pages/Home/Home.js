import React, { useState, Fragment } from "react";
import Thema from "./Thema/Thema";
import Schwierigkeitsgrad from "./Schwirigkeitsgrad/Schwierigkeitsgrad";
import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation/Navigation";
import Gameboard from "../../components/Gameboard/Gameboard";
import Uuid from 'uuid/v1';
import './home.css'; 
import { Toast } from "react-bootstrap";

export default function Home({}) {
  const [topic, setTopic] = useState();
  const [schwierigkeit, setSchwierigkeit] = useState();
  const [quiz, setQuiz] = useState();
  const [topicName, setTopicName] = useState("");

  const startQuiz = () => { 
    if (topic && schwierigkeit) {
      setQuiz(Uuid());
    }
    else {
      alert("Bitte such dir ein Thema und eine Schwierigkeit aus"); 
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title>Quiz App - Game</title>
      </Helmet>
      <div className="home_screen">
        {quiz ? (
          <Gameboard quiz={quiz} topic={topic} topicName={topicName} schwierigkeit={schwierigkeit} onReset={() => setQuiz()} />
        ) : (
          <div>
            <div className="App-navi">
              <Navigation />
            </div>
            <Thema onThemaChange={(topic, topicName) => {setTopic(topic); setTopicName(topicName)}} />
            <Schwierigkeitsgrad onSchwierigkeitsChange={setSchwierigkeit} />
            <button className="button_start_quiz" onClick={startQuiz}>Start</button>
          </div>
        )}
      </div>
    </Fragment>
  );
}
