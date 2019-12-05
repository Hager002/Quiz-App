import React, { Component } from "react";

class Question extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.frage}</h2>

        <div className="options-container">
          <p className="option"> {this.props.optionA}</p>
          <p className="option"> {this.props.optionB}</p>
          <p className="option"> {this.props.optionC}</p>
          <p className="option"> {this.props.optionD}</p>
        </div>
      </div>
    );
  }
}
export default Question;
