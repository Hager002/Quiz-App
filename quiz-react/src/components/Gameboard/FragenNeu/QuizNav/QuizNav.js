import React from "react";
import './quizNav.scss';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function QuizNav({ onBack, onForward, onReset }) {
  return (
    <div>
      <div className="button-container">
        <button className="quiz-nav" name="back" onClick={onBack}><ArrowBackIcon/><br />Zurück</button>
        <button className="quiz-nav" name="forward" onClick={onForward}><ArrowForwardIcon/><br />Vor</button>
        <button className="quiz-nav" name="reset" onClick={onReset}><CloseIcon /><br />Abbrechen</button>
      </div>
    </div>
  );
}
