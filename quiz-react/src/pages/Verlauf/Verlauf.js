import React, { useEffect, useContext, useState, Fragment } from "react";import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation/Navigation";
import UserContext from '../../context/user';
import Loading from '../../components/loading/loading';
import axios from '../../components/axios';

import './verlauf.scss';

export default function Verlauf({}) {
  const [results, setResults] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    axios
      .get("/results", {
        params: {
          q: { user }
        }
      })
      .then(response => setResults(response.data))
      .catch(error => {
        window.alert("Fehler bei Zugriff auf die Datenbank! Bitte Seite neu Laden oder Administrator verständigen");
        console.log(error);
      });
  }, []);

  return results.length === 0 ? <Loading/> : (
    <Fragment>
      <Helmet>
        <title>Quiz App - Verlauf</title>
      </Helmet>
      <div className="App-navi">
        <Navigation />
      </div>
      <div className="overview">
        <h2> Verlaufübersicht </h2>
        <section className="ein_ablauf">
          {results.map(result => <div>
            <hr/>
            <p>Datum: <span>{result.date}</span></p>
            <p>Thema: <span>{result.topic[0].name}</span></p>
            <p>Fragenanzahl: <span>{result.total}</span></p>
            <p>richtige Antworten: <span>{result.correct}</span></p>
          </div>
          )}
          </section>
        </div>
      </Fragment>
    );  
}
