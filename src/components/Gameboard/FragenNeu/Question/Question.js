import React, { Component } from "react";

class Question extends Component {
  render() {
    return (
      <div>
        <div className="question">
          <p>{this.props.question}</p>
        </div>

        <div className="options-container">
          <p onClick={this.handleOptionClick} className="option">
            {this.props.answers}
          </p>
          <p onClick={this.handleOptionClick} className="option">
            {this.props.answers}
          </p>
          <p onClick={this.handleOptionClick} className="option">
            {this.props.answers}
          </p>
          <p onClick={this.handleOptionClick} className="option">
            {this.props.answers}
          </p>
        </div>
      </div>
    );
  }
}
export default Question;
