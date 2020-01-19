import React, { useEffect, useContext, Fragment } from "react";
import { Helmet } from "react-helmet";
import UserContext from '../../../../context/user';
import axios from '../../../axios';
import './ergebnis.css';
import SentimentVerySatisfiedSharpIcon from '@material-ui/icons/SentimentVerySatisfiedSharp';
import SentimentVeryDissatisfiedSharpIcon from '@material-ui/icons/SentimentVeryDissatisfiedSharp';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import SentimentDissatisfiedSharpIcon from '@material-ui/icons/SentimentDissatisfiedSharp';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

export default function Ergebnis({ quiz, topic, total, correct }) {
  const user = useContext(UserContext);
  
  useEffect(() => {
    axios.post('/results', {
        user,
        topic,
        total,
        correct,
        date: Date.now(),
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
        <p className="topicname">{topic.name}</p><br/>

        <p className="infotext"> Du hast {correct} von {total} Fragen richtig beantwortet. </p>  

      {/* 3 Fragen: */}
        { ((total === 3) && (correct === 0)) ? (
          <div>
            <SentimentVeryDissatisfiedSharpIcon style={{fontSize:50}} className="emoji"/> <br/>
            <p className="commentar" >Du hast ja keine Ahnung. Du bist ein Looser!</p>
          </div>
          ) : (<div />)}

        { ((total === 3) && (correct === 1)) ? (
          <div> 
            <SentimentDissatisfiedSharpIcon style={{fontSize:50}} className="emoji"/> <br/>
            <p className="commentar" >Na ja, wenigstens etwas! Aber wie es scheint ist das nicht dein Fachgebiet!</p>
          </div>
          ) : (<div />)}

        { ((total === 3) && (correct === 2)) ? (
          <div>
            <SentimentSatisfiedSharpIcon style={{fontSize:50}} className="emoji"/> <br/>
            <p className="commentar" >Fast Perfect. streng dich noch bissi an</p>
          </div>
        ) : (<div />)}

        { ((total === 3) && (correct === 3)) ? (
          <div>
            <SentimentVerySatisfiedSharpIcon style={{fontSize:50}} className="emoji"/> <br/>
            <p className="commentar" >Gratuliere, alles richtig!</p>
          </div>
        ) : (<div />)}

      {/* 4 Fragen: */}
        { ((total === 4) && (correct === 0)) ? (
          <div>
            <SentimentVeryDissatisfiedSharpIcon style={{fontSize:50}} className="emoji"/> <br/>
            <p className="commentar" >Du hast ja keine Ahnung. Du bist ein Looser!</p>
          </div>
          ) : (<div />)}

        { ((total === 4) && (correct === 1)) ? (
          <div> 
            <SentimentDissatisfiedSharpIcon style={{fontSize:50}} className="emoji"/> <br/>
            <p className="commentar" >Na ja, wenigstens etwas! Aber wie es scheint ist das nicht dein Fachgebiet!</p>
          </div>
          ) : (<div />)}

        { ((total === 4) && (correct === 2)) ? (
          <div>
            <SentimentSatisfiedIcon style={{fontSize:50}} className="emoji"/> <br/>
            <p className="commentar" >Na ja, wenigstens etwas! Du musst dich noch einbisschen bemühen!</p>
          </div>
        ) : (<div />)}

        { ((total === 4) &&(correct === 3)) ? (
          <div>
            <SentimentSatisfiedSharpIcon style={{fontSize:50}} className="emoji"/> <br/>
            <p className="commentar" >Fast Perfect. streng dich noch bissi an</p>
          </div>
        ) : (<div />)}

        { ((total === 4) &&(correct === 4)) ? (
          <div>
            <SentimentVerySatisfiedSharpIcon style={{fontSize:50}} className="emoji"/> <br/>
            <p className="commentar" >Gratuliere, alles richtig!</p>
          </div>
        ) : (<div />)}

      </section>
    </Fragment>
  );
}
