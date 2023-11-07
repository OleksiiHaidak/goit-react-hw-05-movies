import React, { useState, useEffect } from "react";
import axios from "axios";
import Notiflix from 'notiflix';
import css from 'components/Movies/Movies.module.css';

const themoviedbApiKey = "4219f818c3b647ef6b7c71c399226158";
const url = "https://api.themoviedb.org/3/search/movie";

const Movies = () => {
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = evt => {
        evt.preventDefault();
        if (inputValue.trim().toLowerCase() === '') {
            Notiflix.Notify.info('Please enter your request', { position: 'center-center', fontSize: '16px' });
            return;
        }
        setIsFormSubmitted(true);
    };

    const handleInputChange = evt => {
        setInputValue(evt.target.value);
        setIsFormSubmitted(false);
    };

    useEffect(() => {
        if (isFormSubmitted) {
            const fetchDataFilm = async () => {
                try {
                    setIsLoading(true);
                    const response = await axios.get(`${url}?api_key=${themoviedbApiKey}&query=${inputValue}`);
                    setData(response.data);
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
        }
    }, [isFormSubmitted, inputValue]);

    return (
        <main>
            <form className={css.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={css.SearchFormButton}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                </button>
                <input
                    className={css.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
            <ul>
                {data && data.results.map(film => (
                    <li key={film.id}>{film.title}</li>
                ))}
            </ul>
            {isLoading && <div>Loading...</div>}
        </main>
    );
};

export default Movies;