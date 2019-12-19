import React, { Component } from "react";

class Question extends Component {
  handleOptionClick() {
    console.log("this is:", this);
  }

  render() {
    return (
      <div>
        <h2>{this.props.frage}</h2>

        <div className="options-container">
          <p className="option" href="#" onClick={e => this.handleOptionClick(e)}>
            {this.props.optionA}
          </p>
          <p> {this.props.antwort}</p>
          <p className="option" href="#" onClick={e => this.handleOptionClick(e)}>
            {this.props.optionB}
          </p>
          <p className="option" href="#" onClick={e => this.handleOptionClick(e)}>
            {this.props.optionC}
          </p>
          <p className="option" href="#" onClick={e => this.handleOptionClick(e)}>
            {this.props.optionD}
          </p>
        </div>
      </div>
    );
  }
}
export default Question;
