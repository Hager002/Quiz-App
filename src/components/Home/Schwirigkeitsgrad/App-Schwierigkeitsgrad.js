import React from "react";
import { Component } from "react";

class AppSchwierigkeitsgrad extends Component {
  onCheckChange() {
    let leicht = document.getElementById("leicht");
    let schwer = document.getElementById("schwer");

    if (schwer.checked === true) {
      console.log("schwer ausgesucht");
      // do something --> Countdown starten wenn Quiz beginnt
    } else if (leicht.checked === true) {
      console.log("leicht ausgesucht");
    }
  }

  render() {
    return (
      <section className="Schwierigkeit">
        <h3> Die Schwierigkeitsstufe </h3>
        <p>Bitte suchen sie sich eine Schwierigkeitsstufe aus.</p>
        <input type="radio" name="radioS" id="leicht" onChange={this.onCheckChange} /> leicht <br />
        <input type="radio" name="radioS" id="schwer" checked="checked" onChange={this.onCheckChange} />{" "}
        schwer <br />
      </section>
    );
  }
}
export default AppSchwierigkeitsgrad;
