
import React from 'react';
import { Component } from 'react';

class AppThema extends Component {

  constructor(props) {
    super(props)
    this.state = {
      check1: 'Die Abreitsweise der Physik',
      check2: 'Die sieben SI-Einheiten',
      check3: 'Newton mal drei',
      check4: 'Arbeit und Energie',
      check5: 'Impuls',
      check6: 'Rotationen',
    }
  }

  render() {
    return (
      <section className="Fach">
        <h3> Das Thema </h3>

        <div className="radio">
          <label className="thema1">
            <input type="radio" name="radio"
              checked={this.state.check1}
              onChange={this.onCheckChange} />Die Arbeitsweise der Physik
          </label>
        </div>

        <div className="radio">
          <label className="thema2">
            <input type="radio" name="radio"
              checked={this.state.check2}
              onChange={this.onCheckChange} /> Die sieben SI-Einheiten
          </label>
        </div>

        <div className="radio">
          <label className="thema3">
            <input type="radio" name="radio"
              checked={this.state.check3}
              onChange={this.onCheckChange} /> Newton mal drei
          </label>
        </div>

        <div className="radio">
          <label className="thema4">
            <input type="radio" name="radio"
              checked={this.state.check4}
              onChange={this.onCheckChange} /> Arbeit und Energie
          </label>
        </div>

        <div className="radio">
          <label className="thema5">
            <input type="radio" name="radio"
              checked={this.state.check5}
              onChange={this.onCheckChange} /> Impuls
          </label>
        </div>

        <div className="radio">
          <label className="thema6">
            <input type="radio" name="radio"
              checked={this.state.check6}
              onChange={this.onCheckChange} /> Rotationen
          </label>
        </div>

      </section >

    );
  }

}
export default AppThema;

