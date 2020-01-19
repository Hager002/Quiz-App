import React from "react";
import './quizinfo.css'; 


export default function Kontext({ currentQuestionValue, topicName, total }) {
  return (
    <div>
      <div className="button-container">
          <p className="topicname">{topicName}</p>
          <p className="frageninfo">Frage {currentQuestionValue} von {total} </p> 
        </div>
    </div>
  );
}
