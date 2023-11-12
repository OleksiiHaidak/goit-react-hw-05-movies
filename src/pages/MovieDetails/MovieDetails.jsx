import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, Link, NavLink, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Notiflix from 'notiflix';
import css from 'pages/MovieDetails/MovieDetails.module.css';
import Cast from "pages/Cast/Cast.jsx";
import Reviews from "pages/Reviews/Reviews.jsx";

const themoviedbApiKey = "4219f818c3b647ef6b7c71c399226158";
const url = "https://api.themoviedb.org/3/movie/";

const MovieDetails = () => { 

    const { movieId } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? '/';

    const [searchedFilms, setSearchedFilms] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!movieId) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
          const response = await axios.get(`${url}${movieId}?api_key=${themoviedbApiKey}`);
          setSearchedFilms(response.data);
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
  <div>
    <div>
        {isLoading && <div className={css.loading}>Loading...</div>}
        <Link to={backLink} className={css.btnGoBack}>Go back</Link>
  {searchedFilms && (
    <div className={css.mainContainer}>
      <div className={css.container}>
        <div>
          <img
            src={searchedFilms.poster_path ? `https://image.tmdb.org/t/p/w500${searchedFilms.poster_path}` : "components/Img/defaultImg.webp"}
            width={250}
            alt="poster"
          />
        </div>
        <div className={css.textContainer}>
          <div className={css.mainTitle}>{searchedFilms.title} ({new Date(searchedFilms.release_date).getFullYear()})</div>
          <div>User Score {Math.round(searchedFilms.popularity)} %</div>
          <div className={css.secondTitle} >Overview</div>
          <div>{searchedFilms.overview}</div>
          <div className={css.secondTitle}>Genres</div>
          <div>{searchedFilms.genres.map(genre => genre.name).join(' ')}</div>
        </div>
      </div>
    </div>
  )}
    </div>
    <div className={css.secondContainer}>
    <div className={css.thirdTitle}>Additional information</div>
        <NavLink to="cast" state={{from: location.state?.from ?? '/'}} className={css.link}>Cast</NavLink>
        <NavLink to="reviews" state={{from: location.state?.from ?? '/'}} className={css.link}>Reviews</NavLink>
          <Suspense fallback={<div>Loading...</div>}>
             <Routes>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
             </Routes>
          </Suspense>
    </div>
    </div>
);};

export default MovieDetails;