import React from "react";
import './quizKontext.css'; 


export default function QuizKontext({ currentQuestionValue, topicName, total }) {
  return (
    <div>
      <div className="button-container">
          <p className="topicname">{topicName}</p>
          <p className="frageninfo">Frage {currentQuestionValue} von {total} </p> 
        </div>
    </div>
  );
}
