import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Question from "../Fragen/Question/Question";

// Fragen : Bifi-Aufgabenpool

const Fragen = props => {
  const [question, setQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetch = () => {
      axios
        .get("/fragenundantworten")
        .then(response => {
          setQuestion(response.data);
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
  };

  const backButtonHandler = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const quitButtonHandler = () => {
    if (window.confirm("Quit?")) {
      this.props.history.push("/home");
    } else {
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
          frage={question[currentQuestion].frage}
          antwort={question[currentQuestion].antwort}
          optionA={question[currentQuestion].optionA}
          optionB={question[currentQuestion].optionB}
          optionC={question[currentQuestion].optionC}
          optionD={question[currentQuestion].optionD}
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
          Quit
        </button>
      </div>
    </div>
  );
};

export default Fragen;
