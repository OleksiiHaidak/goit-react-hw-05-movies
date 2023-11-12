import { Navigate, Routes, Route} from "react-router-dom";
import React, { Suspense } from 'react';
import Layout from "components/Layout/Layout.jsx";
const HomePage = React.lazy(() => import("pages/HomePage/HomePage.jsx"));
const Movies = React.lazy(() => import("pages/Movies/Movies.jsx"));
const MovieDetails = React.lazy(() => import("pages/MovieDetails/MovieDetails.jsx"));


export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;