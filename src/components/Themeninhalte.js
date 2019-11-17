
import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Button, ButtonToolbar } from 'react-bootstrap';


class Themeninhalt extends Component {

    render() {
        return (
            <Fragment>
                <Helmet><title>Quiz App - Inhalt</title> </Helmet>


                <section className='thema1'>
                    <h3>Thema: 1</h3>
                    <p> Hier kommt der Inhalt der gelesen wird um die Fragen im nachhinein beantworten ku können. </p>
                </section>

                <Button className="StartQuiz"
                    onClick={() => { this.props.history.replace('/quiz') }}>
                    Starte das Quiz
                </Button>
            </Fragment>


        );
    }
}

export default Themeninhalt; 
