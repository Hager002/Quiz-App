import React from "react";
import './quizinfo.css'; 


export default function Kontext({ currentQuestionValue, topicName, anzahl }) {
  return (
    <div>
      <div className="button-container">
          <p className="topicname">{topicName}</p>
          <p className="frageninfo">Frage {currentQuestionValue} von {anzahl} </p> 
        </div>
    </div>
  );
}
