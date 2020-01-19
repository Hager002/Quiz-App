import React, { useEffect, useContext, useState, Fragment } from "react";import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation/Navigation";
import UserContext from '../../context/user';
import Loading from '../../components/loading/loading';
import axios from '../../components/axios';
import moment from "moment"; 
import './verlauf.css';
import StarRateIcon from '@material-ui/icons/StarRate';


const DATETIME_FORMAT = "DD.MM.YYYY HH:mm"

export default function Verlauf({}) {
  const [results, setResults] = useState();
  const user = useContext(UserContext);

  useEffect(() => {
    axios
      .get("/results", {
        params: {
          q: { 
            user: {
                  "_id": user._id
            } 
          }
        }
      })
      .then(response => setResults(response.data))
      .catch(error => {
        window.alert("Fehler bei Zugriff auf die Datenbank! Bitte Seite neu Laden oder Administrator verständigen");
        console.log(error);
      });
  }, []);

  return results ? (
    <Fragment>
      <Helmet>
        <title>Quiz App - Verlauf</title>
      </Helmet>
      <div className="verlauf_screen">
        <div className="App-navi">
          <Navigation />
        </div>
        <div className="overview">
          <h3 className="overview_h3"> Verlaufübersicht </h3>
          <section className="ein_ablauf">
            { results.length > 0 ? results.map(result =>  
              <div>              
                <hr/>
                <h4> <StarRateIcon/> Spiel</h4>
                <p>Datum: <span>{ moment(result.data).format(DATETIME_FORMAT)}</span></p>
                <p>Thema: <span>{result.topic[0].name}</span></p>
                <p>Fragenanzahl: <span>{result.total}</span></p>
                <p>Richtige Antworten: <span>{result.correct}</span></p>
              </div>
            ) : (
              <div>Keine Ergebnise vorhanden!</div>
            )}
            </section>
          </div>
      </div>
      </Fragment>
    ) : <Loading/>;  
}
