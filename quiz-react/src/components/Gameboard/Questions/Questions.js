import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Question from "./Question/Question";
import QuizNav from "./QuizNav/QuizNav";
import Loading from '../../loading';
import Ergebnis from './Ergebnis/Ergebnis';
import QuizKontext from './QuizKontext/QuizKontext';
import ErgebnisNav from './Ergebnis/ErgebnisNav/ErgebnisNav';

export default function Questions({quiz, topic, onReset, anzahl}) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [showErgebnis, setShowErgebnis] = useState(false);

  useEffect(() => {
    console.log("from fragenneu: ",topic)
    axios
      .get("/questions", {
        params: {
          q: { topic }
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
    answer.iscorrect ? setCorrectAnswer(correctAnswer +1) : setWrongAnswer(wrongAnswer + 1);
/*     setTimeout(() => { forward(); }, 1000); */  
}

  return questions.length === 0 ? <Loading/> : (
    <div className="board">
      {
        showErgebnis ? (
          <div> 
            <Ergebnis quiz={quiz} topic={topic} total={questions.length} correct={correctAnswer} />
            <ErgebnisNav onReset={onReset}/>
          </div>
        ) : (
          <div > 
            <QuizKontext currentQuestionValue={currentQuestion+1} topicName={topic.name} total={questions.length} />
            <Question question={questions[currentQuestion]} onClick={validateAnswer} />
            <QuizNav onBack={back} onForward={forward} onReset={onReset}/>
          </div>
        )
      }
    </div>
  );
}
