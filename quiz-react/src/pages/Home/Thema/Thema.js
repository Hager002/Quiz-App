import React, { useEffect, useState } from "react";
import Loading from '../../../components/loading/index';
import axios from '../../../components/axios';
import './thema.scss'; 

export default function AppThema({ onThemaChange }) {
  const [topics, setTopics] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/topics")
      .then(response => {
        setTopics(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const listTopics = () => {
    return 
  }

  return isLoading ?  <Loading/> : 
  (
    topics.length === 0 ? <p>Keine Topics vorhanden!</p> :
    (
      <section className="Thema">
        <h3>Themen</h3>
        <p>Such dir ein Thema aus.</p>
        { topics.map(topic => (
          <div className="radio">
            <label className="thema">
              <input key={topic._id} type="radio" name="topic" id={topic._id} onChange={e => onThemaChange(e.target.id)} /> {topic.name} </label>
          </div>
        ))}

      </section>
    )
  )
}