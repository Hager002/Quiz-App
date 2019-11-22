import React from "react";
import { Component } from "react";

class AppThema extends Component {
  onCheckChange() {
    // do something
  }

  render() {
    return (
      <section className="Thema">
        <h3> Das Thema </h3>

        <div className="radio">
          <label className="thema1">
            <input type="radio" name="radio" id="thema1" onChange={this.onCheckChange} checked="true" />
            Genetik und Gentechnik
          </label>
        </div>

        <div className="radio">
          <label className="thema2">
            <input type="radio" name="radio" id="thema2" onChange={this.onCheckChange} /> Pflanzen
          </label>
        </div>

        <div className="radio">
          <label className="thema3">
            <input type="radio" name="radio" id="thema3" onChange={this.onCheckChange} /> Leben im Meer
          </label>
        </div>
      </section>
    );
  }
}
export default AppThema;
