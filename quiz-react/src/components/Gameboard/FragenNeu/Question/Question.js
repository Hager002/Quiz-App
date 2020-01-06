import React from "react";
import './question.css';

export default function Question({question, onClick}) {
  return (
    <div>
      <div role="heading" aria-level="1" tabindes="0">{question.question}</div>
      <div className="options_container" >
        { question.answers.map(answer => (
          <button sr-only="option" className={`${answer === question.selectedAnswer ? " option_selected " : "option"}`}  onClick={() => onClick(answer)}>
            {answer.text} 
          </button>
        ))}
      </div>
    </div>
  );
}