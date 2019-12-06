import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Question from "../FragenNeu/Question/Question";
import QuizNav from "./QuizNav/QuizNav";
import { func } from "prop-types";
import Ergebnis from "./Ergebnis/Ergebnis";
import Spinner from "react-spinner-material";

export default function Fragen({
  topic,
  schwierigkeit,
  backButtonHandler,
  forwardButtonHandler,
  quitButtonHandler,
  handleOptionClick
}) {
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

  function erg() {
    window.location.href = "/ergebnis";
  }
  function quitButtonHandler() {
    if (window.confirm("Quit?")) {
      window.location.href = "/ergebnis";
    } else {
    }
  }

  function anzahl() {
    let anzahl = question.length;
  }

  // function handleOptionClick(event) {
  //   if (event.target.question[currentQuestion].answers[0].iscorrect === true) {
  //     setCorrectAnswer = setCorrectAnswer + 1;
  //     setWrongAnswer = setWrongAnswer;
  //     console.log("richtige Antwort");
  //   } else {
  //     setWrongAnswer = setWrongAnswer + 1;
  //     setCorrectAnswer = setCorrectAnswer;
  //     console.log("falsche Antwort");
  //   }
  // }
  // function rightWrongAnswer() {
  //   return (
  //     <div>
  //       <Question
  //         istrichtig={setCorrectAnswer}
  //         istfalsch={setWrongAnswer}
  //         antwort={question[currentQuestion].question.answers[0].iscorrect}
  //       />
  //     </div>
  //   );
  // }
  // rightWrongAnswer = handleOptionClick();

  function setCorrectJSX() {
    if (question.length === 0) {
      if (load) {
        return (
          <div className="spinner">
            <Spinner size={50} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
          </div>
        );
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
  }

  let frageShow = null;
  frageShow = setCorrectJSX();

  function setQuizNav() {
    return (
      <div>
        <QuizNav
          backButtonHandler={backButtonHandler}
          forwardButtonHandler={forwardButtonHandler}
          quitButtonHandler={quitButtonHandler}
        />
      </div>
    );
  }
  let navShow = null;
  navShow = setQuizNav();

  return (
    <div>
      {frageShow}
      {navShow}
    </div>
  );
}
