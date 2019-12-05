import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
// import Quiz, {numberOfQuestions} from './Quiz';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export class Ergebnis extends Component {
  render() {
    // const {numberOfQuestions}

    return (
      <Fragment>
        <Helmet>
          <title>Quiz App - Ergebnis</title>{" "}
        </Helmet>

        <header>
          <title> Ergebnis </title>
        </header>

        <div className="ergebnis AAA_ergebnis">
          <MDBContainer>
            <MDBRow>
              <MDBCol size="6" sm="5" className="zeit">
                <p>
                  Benötigte Zeit: <br /> <span>3:30</span> min
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="6" sm="5" className="fragenAnzahl">
                <p>
                  Fragen: <br /> <span>5</span>
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="6" sm="5" className="richtig">
                <p>
                  Richtige Antworten: <br /> <span>4</span>
                </p>
              </MDBCol>
              <MDBCol size="6" sm="5" className="falsch">
                <p>
                  Falsche Antworten: <br /> <span>1</span>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <div className="backButton">
            <button
              className="goBackToHome"
              onClick={() => {
                this.props.history.replace("/home");
              }}
            >
              Back To Homescreen
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
