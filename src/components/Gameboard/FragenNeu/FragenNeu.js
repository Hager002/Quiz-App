import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Question from "../Fragen/Question/Question";

// Fragen : Bifi-Aufgabenpool

const Fragen = props => {
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [topic, setTopic] = useState([]);
  const [iscorrect, setIsCorrect] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [load, setLoad] = useState(false);
  const [correctAnswer] = useState(0);

  useEffect(() => {
    const fetch = () => {
      axios
        .get("/questions")
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
  }, []);

  const forwardButtonHandler = () => {
    if (currentQuestion < question.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion === question.length - 1) {
      console.log("fragen fertig ");
      window.location.href = "/ergebnis";
    }
  };

  const backButtonHandler = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const quitButtonHandler = () => {
    if (window.confirm("Quit?")) {
      window.location.href = "/ergebnis";
    } else {
    }
  };

  // true or false?
  const handleOptionClick = event => {
    console.log("JA");
    if (event.target.answers.iscorrect === true) {
      correctAnswer = correctAnswer + 1;
      console.log("true", correctAnswer);
    } else {
      console.log("false", correctAnswer);
      correctAnswer = correctAnswer;
    }
  };

  const setCorrectJSX = () => {
    if (question.length === 0) {
      if (load) {
        return <p> Loading ...</p>;
      } else {
        return <p> Keine Daten vorhanden ...</p>;
      }
    } else {
      return (
        <Question
          frage={question[currentQuestion].question}
          optionA={question[currentQuestion].answers[0].text}
          optionB={question[currentQuestion].answers[1].text}
          optionC={question[currentQuestion].answers[2].text}
          optionD={question[currentQuestion].answers[3].text}
          //optionClick={handleOptionClick}
        />
      );
    }
  };

  let frageShow = null;
  frageShow = setCorrectJSX();

  return (
    <div>
      {frageShow}
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
};

export default Fragen;
