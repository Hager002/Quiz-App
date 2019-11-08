
import React from 'react';
import { Component } from 'react';


class AppFach extends Component {

  constructor(props) {
    super(props)
    this.state = {
      check1: 'Mathematik',
      check2: 'Deutsch',
      check3: 'Geschichte',
      check4: 'Musik'
    }
  }

  render() {
    return (
      <section className="Fach">
        <h1> Das Schulfach </h1>
        <p>Bitte suchen sie sich ein Fach aus.</p>

        <div className="radio">
          <label>
            <input type="radio" name="radio"
              value="Mathematik"
              checked={this.state.check1}
              onChange={this.onCheckChange} />Mathematik
          </label>
        </div>

        <div className="radio">
          <label>
            <input type="radio" name="radio"
            value="Deutsch"
              checked={this.state.check2}
              onChange={this.onCheckChange} /> Deutsch
          </label>
        </div>

        <div className="radio">
          <label>
            <input type="radio" name="radio"
              checked={this.state.check3}
              onChange={this.onCheckChange} /> Geschichte
          </label>
        </div>

        <div className="radio">
          <label>
            <input type="radio" name="radio"
              checked={this.state.check4}
              onChange={this.onCheckChange} /> Musik
          </label>
        </div>
      </section>

    );
  }

}
export default AppFach; 
