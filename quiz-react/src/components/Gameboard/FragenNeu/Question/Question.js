import React from "react";
import './question.scss';

export default function Question({question, onClick}) {

  return (
    <div>
      <h2>{question.question}</h2>
      <div className="options_container">
        { question.answers.map(answer => (
          <p className={`${answer === question.selectedAnswer ? " option_selected " : "option"}`}  onClick={() => onClick(answer)}>
            {answer.text}
          </p>
        ))}
      </div>
    </div>
  );
}