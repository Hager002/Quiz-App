import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Question from "./Question/Question";
import QuizNav from "./QuizNav/QuizNav";
import Loading from '../../loading';
import Ergebnis from './Ergebnis/Ergebnis';


export default function Questions({
  topic,
  schwierigkeit,
  backButtonHandler,
  forwardButtonHandler,
  quitButtonHandler
}) {
  const [questions, setQuestions] = useState([]);
  const [showErgebnis, setShowErgebnis] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [load, setLoad] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  useEffect(() => {
    console.log(topic, schwierigkeit);
    axios
      .get("/questions", {
        params: {
          q: {"topic": {"_id": topic}}
        }
      })
      .then(response => {
        console.log(response.data);
        setQuestions(response.data);
        setLoad(false);
      })
      .catch(error => {
        console.log(error);
        setLoad(false);
      });
    setLoad(true);
  }, [topic]);

  const forward = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion === questions.length - 1) {
      setShowErgebnis(true);      
    }
  }

  const back = () => {
    if (showErgebnis) {
      setShowErgebnis(false);
    }
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  const validateAnswer = answer => {
    console.log(answer);
    questions[currentQuestion].selectedAnswer = answer;
    if (answer.iscorrect) {
      console.log("Correct");
      setCorrectAnswer(correctAnswer +1);
    } else {
      console.log("Wrong");
      setWrongAnswer(wrongAnswer +1);
    }
    console.log("Correct: " + correctAnswer);
    console.log("Wrong: " + wrongAnswer);

    forward();
  }

  return questions.length === 0 ? (
      load ? <Loading/> : <p> Keine Daten vorhanden ...</p>
    ) : (
      <div>
        {
          showErgebnis ? (
            <Ergebnis anzahl={questions.length} correct={correctAnswer} wrong={wrongAnswer} />
          ) : (
            <Question question={questions[currentQuestion]} onClick={validateAnswer} />
          )
        }
        <QuizNav
          backButtonHandler={back}
          forwardButtonHandler={forward}
          quitButtonHandler={quitButtonHandler}
        />
      </div>
    );
}
