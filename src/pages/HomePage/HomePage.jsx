import React, { useState, useEffect } from "react";
import {Link, useLocation } from "react-router-dom";
import axios from "axios";
import Notiflix from 'notiflix';
import css from "pages/HomePage/HomePage.module.css";

const themoviedbApiKey = "4219f818c3b647ef6b7c71c399226158";
const url = "https://api.themoviedb.org/3/trending/movie/day";


const HomePage = () => {

    const [searchedFilms, setSearchedFilms] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${url}?api_key=${themoviedbApiKey}`);
        setSearchedFilms(response.data);
      } catch (error) {
        Notiflix.Notify.failure('Oops, something went wrong', { position: 'center-center', fontSize: '16px' });
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
      fetchData();
  }, []);


  return (
    <main>
      <p className={css.title}>Trending today</p>
      {isLoading && <div className={css.loading}>Loading...</div>}
      <ul className={css.list}>
          {searchedFilms !== null && searchedFilms.results.map(film => (
              <li key={film.id}>
                  <Link state={{from: location}} to={`/movies/${film.id}`} className={css.listItem}>
                      <span>{film.title}</span>
                   </Link>
               </li>
               ))};
          </ul>
    </main>
  );
};

export default HomePage;