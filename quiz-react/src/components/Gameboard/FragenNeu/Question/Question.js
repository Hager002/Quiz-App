import React from "react";

export default function Question({question, onClick}) {

  return (
    <div>
      <h2>{question.question}</h2>
      <div className="options-container">
        { question.answers.map(answer => (
          <p className={`${answer === question.selectedAnswer ? "option option--selected " : "option"}`}  onClick={() => onClick(answer)}>
            {answer.text}
          </p>
        ))}
      </div>
    </div>
  );
}