import React, { useEffect, useContext, Fragment } from "react";
import { Helmet } from "react-helmet";
import UserContext from '../../../../context/user';
import axios from '../../../axios';
import './ergebnis.css';
import SentimentVerySatisfiedSharpIcon from '@material-ui/icons/SentimentVerySatisfiedSharp';
import SentimentVeryDissatisfiedSharpIcon from '@material-ui/icons/SentimentVeryDissatisfiedSharp';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import SentimentDissatisfiedSharpIcon from '@material-ui/icons/SentimentDissatisfiedSharp';

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

      <section className="ergebnis_screen">
        <p>{topic}</p>

        <p className="info"> Du hast {correct} von {anzahl} Fragen richtig beantwortet. </p>  

        { (correct === 0) ? (
          <div>
            <SentimentVeryDissatisfiedSharpIcon className="emoji"/> 
            <p className="commentar" >Du weisst nichst. Du bist ein Looser!</p>
          </div>
          ) : (<div />)}

        { (correct === 1) ? (
          <div> 
            <SentimentDissatisfiedSharpIcon className="emoji"/> 
            <p className="commentar" >Na ja, wenigstens etwas! Aber wie es scheint ist das nicht dein Fachgebiet!</p>
          </div>
          ) : (<div />)}

        { (correct === 2) ? (
          <div>
            <SentimentSatisfiedSharpIcon className="emoji"/>
            <p className="commentar" >Na ja, wenigstens etwas! Du musst dich noch einbisschen bemühen!</p>
          </div>
        ) : (<div />)}

        { (correct === 3) ? (
          <div>
            <SentimentSatisfiedSharpIcon className="emoji"/>
            <p className="commentar" >Fast Perfect. streng dich noch bissi an</p>
          </div>
        ) : (<div />)}

        { (correct > 3) ? (
          <div>
            <SentimentVerySatisfiedSharpIcon className="emoji"/>
            <p className="commentar" >Gratuliere, alles richtig!</p>
          </div>
        ) : (<div />) }

      </section>
    </Fragment>
  );
}
