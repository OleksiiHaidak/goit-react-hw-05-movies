import { Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import HomePage from "components/HomePage/HomePage.jsx";
import Movies from "components/Movies/Movies.jsx";
// import MovieDetails from "components/MovieDetails/MovieDetails.jsx";
// import Cast from "components/Cast/Cast.jsx"
// import Reviews from "components/Reviews/Reviews.jsx"


export const App = () => {
  return (
    <div>
      <header>
        <NavLink className="NavLink" to="/">Home</NavLink>
        <NavLink className="NavLink" to="/movies">Movies</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
          // <Route path="/movies/:movieId" element={<MovieDetails/>} />
          // <Route path="/movies/:movieId/cast" element={<Cast/>} />
          // <Route path="/movies/:movieId/reviews" element={<Reviews/>} />