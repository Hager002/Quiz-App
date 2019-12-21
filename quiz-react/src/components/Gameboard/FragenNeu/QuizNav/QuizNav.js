import React from "react";
import './quizNav.scss';

export default function QuizNav({ backButtonHandler, forwardButtonHandler, quitButtonHandler }) {
  return (
    <div>
      <div className="button-container">
        <button className="back" name="back" onClick={e => backButtonHandler(e.target.name)}>
          Zurück
        </button>
        <button className="forward" name="forward" onClick={e => forwardButtonHandler(e.target.name)}>
          Vor
        </button>
        <button className="quit" name="quit" onClick={e => quitButtonHandler(e.target.name)}>
          Abbrechen
        </button>
      </div>
    </div>
  );
}
