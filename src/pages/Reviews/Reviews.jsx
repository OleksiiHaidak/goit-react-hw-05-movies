import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Notiflix from 'notiflix';
import css from 'pages/Reviews/Reviews.module.css';

const themoviedbApiKey = "4219f818c3b647ef6b7c71c399226158";
const url = "https://api.themoviedb.org/3/movie/";

const Reviews = () => { 
    const { movieId } = useParams();

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!movieId) return;
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`${url}${movieId}/reviews?api_key=${themoviedbApiKey}`);
                setReviews(response.data.results);
            } catch (error) {
                Notiflix.Notify.failure('Oops, something went wrong', { position: 'center-center', fontSize: '16px' });
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }};
        fetchData();
    }, [movieId]);
    
    return (
        <ul className={css.review}>
            {!isLoading && reviews.length > 0 ? (reviews.map(review => (
                    <li key={review.id} className={css.reviewItem}>
                        <div>Author: {review.author}</div><br/>
                        <div>{review.content}</div>
                    </li>))) : null}
            {!isLoading && reviews.length === 0 ? (<li>We don't have any reviews for this movie</li>) : null}
        </ul>
    );};

export default Reviews;