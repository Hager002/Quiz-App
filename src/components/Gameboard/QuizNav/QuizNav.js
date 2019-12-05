import React, { Component } from "react";

class QuizNav extends Component {
  render() {
    return (
      <div>
        <div className="button-container">
          <button className="previous" onClick={this.backButtonHandler}>
            Zurück
          </button>
          <button className="next" onClick={this.forwardButtonHandler}>
            Vor
          </button>
          <button className="quit" onClick={this.props.quitButtonHandler}>
            Abbrechen
          </button>
        </div>
      </div>
    );
  }
}

export default QuizNav;
