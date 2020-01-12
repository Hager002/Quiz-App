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
      sr-only="answer" 
      className={getStyle()}  
      disabled>
      { isSelectedAnswer() ? (<div>
        { answer.text }<br />
        {"(selected)"}
      </div>
      ) : answer.text}
    </button>
  ) : (
    <button 
      sr-only="answer" 
      className={getStyle()}  
      onClick={() => onClick(answer)}>
      {answer.text}
    </button>
  )
}