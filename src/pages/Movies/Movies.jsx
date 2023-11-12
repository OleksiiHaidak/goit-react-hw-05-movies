import React, { useState, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import Notiflix from "notiflix";
import css from "pages/Movies/Movies.module.css";


const themoviedbApiKey = "4219f818c3b647ef6b7c71c399226158";
const url = "https://api.themoviedb.org/3/search/movie";

const Movies = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const queryValue = searchParams.get('query');
    const [searchedFilms, setSearchedFilms] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();

    const onFormSubmit = evt => { 
        evt.preventDefault();
        const value = evt.currentTarget.elements.searchKey.value;
        if (value.trim() === "") {
            Notiflix.Notify.info('Please enter your request', { position: 'center-center', fontSize: '16px' });
            return;
        }
        setSearchParams({ query: value });
    };


    useEffect(() => {
        if (!queryValue) return;
        const fetchDataFilm = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`${url}?api_key=${themoviedbApiKey}&query=${queryValue}`);
                setSearchedFilms(response.data);
                if (response.data.results.length === 0) {
                    Notiflix.Notify.info('Sorry, there are no films matching your search query', { position: 'center-center', width: '460px', fontSize: '16px' });
                }
            } catch (error) {
                Notiflix.Notify.failure('Oops, something went wrong', { position: 'center-center', fontSize: '16px' });
            } finally {
                setIsLoading(false);
            }
        };
        fetchDataFilm();
    }, [queryValue]);

    
    return (
        <main>
            <form className={css.SearchForm} onSubmit={onFormSubmit}>
                <button type="submit" className={css.SearchFormButton}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                </button>
                <input
                    className={css.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search films"
                    name="searchKey"
                />
            </form>
            {isLoading && <div className={css.loading}>Loading...</div>}
            <ul className={css.list}>
                {searchedFilms !== null && searchedFilms.results.map(film => (
                     <li key={film.id}>
                        <Link state={{from: location}} to={`/movies/${film.id}`} className={css.listItem}>
                             <span>{film.title}</span>
                         </Link>
                     </li>
                ))}
            </ul>
        </main>
    );
};

export default Movies;