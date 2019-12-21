import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../Navigation/Navigation";
import './verlauf.scss';

export class Verlauf extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Quiz App - Verlauf</title>
        </Helmet>

        <div className="overview">
          <header>
            <div className="App-navi">
              <Navigation />
            </div>
          </header>

          <div>
            <h2> Verlauf </h2>

            <section className="ein_ablauf">
              <p>
                Thema: <span>...</span>
              </p>
              <p>
                Datum: <span>...</span>
              </p>
              <p>
                Fragenanzahl: <span>...</span>
              </p>
              <p>
                richtige Antworten: <span>...</span>
              </p>
              <p>
                falsche Antworten: <span>...</span>
              </p>
            </section>
          </div>
        </div>
      </Fragment>
    );
  }
}
