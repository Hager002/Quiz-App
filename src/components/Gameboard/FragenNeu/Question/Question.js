import React, { Component } from "react";

class Question extends Component {
  constructor(props) {
    super();
  }

  handleOptionClick(e) {
    e.target.value;
    console.log("click");
  }

  render() {
    return (
      <div>
        <div className="question">
          <p>{this.props.question}</p>
          <p> {this.props.wahr}</p>
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
