import React from 'react';
import './answer.css';

export default function Answer({answer, selectedAnswer, onClick}) {

  const isCorrectAnswer = () => answer.iscorrect;
  const isWrongAnswer = () => !answer.iscorrect;
  const isSelectedAnswer = () => selectedAnswer === answer;
  const hasUserSelectedAnswer = () => selectedAnswer !== undefined;

  const getStyle = () => {
    let style = "answer";
    if (hasUserSelectedAnswer()) {
      style = style + " answer--disabled";
      if (isSelectedAnswer()) {
        style = style + " answer--selected";
        if (isWrongAnswer()) {
          style = style + " answer--wrong";  
        }
      }
      if (isCorrectAnswer()) {
        style = style + " answer--correct";
      }
    }
    return style; 
  }
  
  return hasUserSelectedAnswer() ? (
    <button 
      className="sr-only"
      readonly="readonly"
      sr-only="answer" 
      className={getStyle()}  
      aria-disabled>
      { isSelectedAnswer() ? (
        isCorrectAnswer() ? (
      <div>
        { answer.text }<br />
        {"(meine Antwort ist correct)"}
      </div> 
      ) : (<div>
        { answer.text }<br />
        {"(meine Antwort ist falsch)"}
      </div>)
      ) : (
        isCorrectAnswer() ? (
          <div>
            { answer.text }<br />
            {"(correct)"}
          </div>
        ): answer.text)}
    </button>
  ) : (
    <button 
      sr-only="answer" 
      readonly="readonly"
      className={getStyle()}  
      onClick={() => onClick(answer)}>
      {answer.text}
    </button>
  )
}