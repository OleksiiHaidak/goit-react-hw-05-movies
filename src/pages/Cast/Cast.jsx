import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Notiflix from 'notiflix';
import css from "pages/Cast/Cast.module.css";

const themoviedbApiKey = "4219f818c3b647ef6b7c71c399226158";
const url = "https://api.themoviedb.org/3/movie/";

const Cast = () => { 
    const { movieId } = useParams();

    const [actors, setActors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!movieId) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
          const response = await axios.get(`${url}${movieId}/credits?api_key=${themoviedbApiKey}`);
          setActors(response.data);
      } catch (error) {
          Notiflix.Notify.failure('Oops, something went wrong', { position: 'center-center', fontSize: '16px' });
          setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
      }
        fetchData();
    }, [movieId]);
    
    return (
        <ul className={css.cardLst}>
    {isLoading && <li>Loading...</li>}
    {actors !== null && actors.cast.slice(0, 6).map(actor => (
      <li key={actor.id} className={css.title}>
        <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
        <div>{actor.character}</div>
        <div>{actor.name}</div>
      </li>
    ))}
  </ul>
    );};

export default Cast;