import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './ergebnis.scss';

export default function Ergebnis({ topic, anzahl, correct, wrong }) {
  return (
    <Fragment>
      <Helmet>
        <title>Quiz App - Ergebnis</title>
      </Helmet>

      <header>
        <title> Ergebnis </title>
      </header>

      <div className="ergebnis_screen">
        <MDBContainer>
          <MDBRow>
            <MDBCol size="6" sm="5" className="zeit">
              <p>
                Benötigte Zeit: <br /> <span>3:30</span> min
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="6" sm="5" className="fragen_anzahl">
              <p>
                Fragen: <br /> <span>{anzahl}</span>
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="6" sm="5" className="richtig">
              <p>
                Richtige Antworten: <br /> <span>{correct}</span>
              </p>
            </MDBCol>
            <MDBCol size="6" sm="5" className="falsch">
              <p>
                Falsche Antworten: <br /> <span>{wrong}</span>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className="button_back">
          <button
            className="goBackToHome"
            onClick={() => {
              window.location.href = "/home";
            }}
          > Zurück zur Startseite
          </button>
        </div>
      </div>
    </Fragment>
  );
}
