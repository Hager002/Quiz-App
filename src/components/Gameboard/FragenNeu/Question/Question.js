import React, { Component } from "react";

class Question extends Component {
  render() {
    return (
      <div>
        <div className="question">
          <p>{this.props.frage}</p>
        </div>
        {/* <p>{this.props.antwort}</p> */}

        <div className="options-container">
          <p className="option"> {this.props.optionA} </p>
          <p className="option"> {this.props.optionB} </p>
          <p className="option"> {this.props.optionD} </p>
          <p className="option"> {this.props.optionC} </p>
        </div>
      </div>
    );
  }
}
export default Question;
