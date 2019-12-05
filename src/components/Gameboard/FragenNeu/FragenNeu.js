import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Question from "../Fragen/Question/Question";
import QuizNav from "../QuizNav/QuizNav";

export default function Fragen({ topic, schwierigkeit }) {
  const [question, setQuestion] = useState([]);
  const [iscorrect, setIsCorrect] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [load, setLoad] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  useEffect(() => {
    console.log(topic, schwierigkeit);
    const fetch = () => {
      axios
        .get("/" + topic)
        .then(response => {
          setQuestion(response.data);
          console.log(response.data);
          setLoad(false);
        })
        .catch(error => {
          console.log(error);
          setLoad(false);
        });
    };
    setLoad(true);
    fetch();
  }, [topic, schwierigkeit]);

  function forwardButtonHandler() {
    if (currentQuestion < question.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion === question.length - 1) {
      console.log("fragen fertig ");
      window.location.href = "/ergebnis";
    }
  }

  function backButtonHandler() {
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function quitButtonHandler() {
    if (window.confirm("Quit?")) {
      window.location.href = "/ergebnis";
    } else {
    }
  }

  //    handleOptionClick = event => {

  //    if (event.target.question[currentQuestion].answers[0].iscorrect === true) {
  //    setCorrectAnswer = setCorrectAnswer + 1;
  //    setWrongAnswer = setWrongAnswer;
  //    console.log("richtige Antwort");
  //    } else {
  //     setWrongAnswer = setWrongAnswer + 1;
  //     setCorrectAnswer = setCorrectAnswer;
  //     console.log("falsche Antwort");
  //    }

  //   return (
  //     <div>
  //       <Question handleOptionClick />
  //     </div>
  //   );
  // };

  const setCorrectJSX = () => {
    if (question.length === 0) {
      if (load) {
        return <p> Loading ...</p>;
      } else {
        return <p> Keine Daten vorhanden ...</p>;
      }
    } else {
      return (
        <div>
          <Question
            frage={question[currentQuestion].question}
            optionA={question[currentQuestion].answers[0].text}
            optionB={question[currentQuestion].answers[1].text}
            optionC={question[currentQuestion].answers[2].text}
            optionD={question[currentQuestion].answers[3].text}
          />
        </div>
      );
    }
  };

  let frageShow = null;
  frageShow = setCorrectJSX();

  /* const setQuizNav = () => {
    return (
      <div>
        <QuizNav backButtonHandler forwardButtonHandler quitButtonHandler />
      </div>
    );
  };
  let navShow = null;
  navShow = setQuizNav(); */

  return (
    <div>
      {frageShow}
      {/* {navShow} */}
      <div className="button-container">
        <button className="previous" onClick={backButtonHandler}>
          Zurück
        </button>
        <button className="next" onClick={forwardButtonHandler}>
          Vor
        </button>
        <button className="quit" onClick={quitButtonHandler}>
          Abbrechen
        </button>
      </div>
    </div>
  );
}
