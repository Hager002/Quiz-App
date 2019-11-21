import React, { Component } from "react";
import axios from "../../axios";
import Question from "../Fragen/Question/Question";
class Fragen extends Component {
  state = {
    fragen: null,
    currentFrage: 0
  };

  forwardButtonHandler = () => {
    if (this.state.currentFrage < this.state.fragen.length - 1) {
      this.setState({
        currentFrage: this.state.currentFrage + 1
      });
    }
  };

  backButtonHandler = () => {
    if (this.state.currentFrage !== 0) {
      this.setState({
        currentFrage: this.state.currentFrage - 1
      });
    }
  };

  componentDidMount() {
    axios
      .get("/fragenundantworten")
      .then(response => {
        this.setState({
          fragen: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let frage = null;

    if (this.state.fragen !== null) {
      const einzelneFrage = this.state.fragen[this.state.currentFrage].frage;
      const antwort = this.state.fragen[this.state.currentFrage].antwort;

      frage = <Question frage={einzelneFrage} antwort={antwort} />;
    }
    return (
      <div>
        {frage}
        <button onClick={this.backButtonHandler}>Zurück</button>
        <button onClick={this.forwardButtonHandler}>Vor</button>
      </div>
    );
  }
}

export default Fragen;
