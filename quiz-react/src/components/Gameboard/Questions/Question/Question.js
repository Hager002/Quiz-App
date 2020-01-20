import React from "react";
import Answer from '../Answer/answer';
import './question.css';

export default function Question({question, onClick}) {

  return (
    <div >
      {console.log(question)}
      <div role="heading" aria-level="1" tabindes="0">{question.question}</div>
      <div className="question_answers-container" >
        { question.answers.map(answer => 
          <Answer 
            answer={answer} 
            onClick={onClick} 
            selectedAnswer={question.selectedAnswer} 
          />)
        } 
      </div>
    </div>
  );
}