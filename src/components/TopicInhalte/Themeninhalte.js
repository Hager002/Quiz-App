import React, { Fragment, Component } from "react";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";

class Themeninhalt extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Quiz App - Inhalt</title>{" "}
        </Helmet>

        <div className="AAA">
          <section className="thema1">
            <h3>Thema: 1</h3>
            <p> Hier kommt der Inhalt der gelesen wird um die Fragen im nachhinein beantworten ku können. </p>
          </section>

          <Button
            className="StartQuiz"
            onClick={() => {
              this.props.history.replace("/gameboard");
            }}
          >
            Starte das Quiz
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default Themeninhalt;
