import React, { useEffect, useContext, Fragment } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import UserContext from '../../../../context/user';
import axios from '../../../axios';
import './ergebnis.scss';

export default function Ergebnis({ quiz, topic, anzahl, correct }) {
  const user = useContext(UserContext);
  
  useEffect(() => {
    axios.post('/results', {
        user,
        topic,
        "questions-total": anzahl,
        "date": Date.now(),
        "questions-correct": correct
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }, [quiz, correct])

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
            <MDBCol size="6" sm="5" className="fragen_anzahl">
              <p>Fragen: <br /> <span>{anzahl}</span></p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="6" sm="5" className="richtig">
              <p>Richtige Antworten: <br /> <span>{correct}</span></p>
            </MDBCol>
            <MDBCol size="6" sm="5" className="falsch">
              <p>Falsche Antworten: <br /> <span>{(anzahl - correct)}</span></p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Fragment>
  );
}
