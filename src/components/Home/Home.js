import React, { Component, Fragment } from "react";
import AppThema from "./App-Thema";
import AppSchwierigkeitsgrad from "./Schwirigkeitsgrad/App-Schwierigkeitsgrad";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Navigation from "../../App-Navigation";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [], addModalShow: false };
  }

  render() {
    let addModalclose = () => this.setState({ addModalShow: false });

    return (
      <Fragment>
        <Helmet>
          <title>Quiz App - Game</title>{" "}
        </Helmet>

        <header>
          <div className="App-navi">
            {" "}
            <Navigation />
          </div>
          <button className="logout">Logout</button>
        </header>

        <div id="gameboard">
          <AppThema />
          <AppSchwierigkeitsgrad />
          <Button
            className="StartQuiz"
            onClick={() => {
              this.props.history.replace("/gameboard");
            }}
          >
            Start
          </Button>
        </div>
      </Fragment>
    );
  }
}
