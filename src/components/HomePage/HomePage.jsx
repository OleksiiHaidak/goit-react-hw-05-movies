import React, { useState, useEffect } from "react";
import axios from "axios";
import Notiflix from 'notiflix';

const themoviedbApiKey = "?api_key=4219f818c3b647ef6b7c71c399226158";
const url = "https://api.themoviedb.org/3/trending/movie/day";


const HomePage = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${url}${themoviedbApiKey}`);
        setData(response.data);
      } catch (error) {
          Notiflix.Notify.failure('Oops, something went wrong', { position: 'center-center', fontSize: '16px' });
          setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
      }
      fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data && data.results.map(film => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default HomePage;

