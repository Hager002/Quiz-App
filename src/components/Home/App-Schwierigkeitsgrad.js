
import React from 'react';
import { Component } from 'react';

class AppSchwierigkeitsgrad extends Component {

    constructor(props) {
        super(props)
        this.state = {
            check_leicht: 'leicht',
            check_schwer: 'schwer',
        }
    }

    render() {
        return (
            <section className="Schwierigkeit">
                <h3> Die Schwierigkeitsstufe </h3>
                <p>Bitte suchen sie sich eine Schwierigkeitsstufe aus.</p>
                
                <input type="radio" name="radioS"
                    checked={this.state.check_leicht}
                    onChange={this.onCheckChange} /> leicht <br />
                
                <input type="radio" name="radioS"
                    checked={this.state.check_schwer}
                    onChange={this.onCheckChange} /> schwer <br />
            </section>
        );
    }

}
export default AppSchwierigkeitsgrad; 
