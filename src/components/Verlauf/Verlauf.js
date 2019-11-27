import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../App/App-Navigation";

export class Verlauf extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Quiz App - Verlauf</title>
        </Helmet>

        <div className="AAA">
          <header>
            <div className="App-navi">
              <Navigation />
            </div>
            <button className="logout">Logout</button>
          </header>

          <div>
            <h2> Verlauf </h2>

            <section className="EinAblauf">
              <h3>
                Quiz <span>1</span>
              </h3>
              <p>
                {" "}
                Schulfach: <span>...</span>
              </p>
              <p>
                {" "}
                Schwirigkeitsstufe: <span>...</span>
              </p>
              <p>
                {" "}
                Frage: <span>Meine Frage?</span>
              </p>
              <div>
                <p>
                  {" "}
                  A: <span>1.Antwortmöglichkeit</span>
                </p>
                <p>
                  {" "}
                  B: <span>2.Antwortmöglichkeit</span>
                </p>
                <p>
                  {" "}
                  C: <span>3.Antwortmöglichkeit</span>
                </p>
                <p>
                  {" "}
                  D: <span>4.Antwortmöglichkeit</span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </Fragment>
    );
  }
}
