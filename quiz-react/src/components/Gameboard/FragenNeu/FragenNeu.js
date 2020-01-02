import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Question from "./Question/Question";
import QuizNav from "./QuizNav/QuizNav";
import Loading from '../../loading';
import Ergebnis from './Ergebnis/Ergebnis';

export default function Questions({
  quiz,
  topic,
  schwierigkeit,
  onReset
}) {
  const [questions, setQuestions] = useState([]);
  const [showErgebnis, setShowErgebnis] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  useEffect(() => {
    axios
      .get("/questions", {
        params: {
          q: {"topic": {"_id": topic}}
        }
      })
      .then(response => setQuestions(response.data))
      .catch(error => {
        window.alert("Fehler bei Zugriff auf die Datenbank! Bitte Seite neu Laden oder Administrator verständigen");
        console.log(error);
      });
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
    questions[currentQuestion].selectedAnswer = answer;
    if (answer.iscorrect) {
      setCorrectAnswer(correctAnswer +1);
    } 
    forward();
  }

  return questions.length === 0 ? <Loading/> : (
    <div className="board">
      {
        showErgebnis ? (
          <Ergebnis 
            quiz={quiz}
            topic={topic}
            anzahl={questions.length} 
            correct={correctAnswer} />
        ) : (
          <Question 
            question={questions[currentQuestion]} 
            onClick={validateAnswer} />
        )
      }
      <QuizNav
        onBack={back}
        onForward={forward}
        onReset={onReset}/>
    </div>
  );
}
