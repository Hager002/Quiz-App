import React from "react";
import './quizNav.scss';

export default function QuizNav({ onBack, onForward, onReset }) {
  return (
    <div>
      <div className="button-container">
        <button className="quiz-nav" name="back" onClick={onBack}>Zurück</button>
        <button className="quiz-nav" name="forward" onClick={onForward}>Vor</button>
        <button className="quiz-nav" name="reset" onClick={onReset}>Abbrechen</button>
      </div>
    </div>
  );
}
