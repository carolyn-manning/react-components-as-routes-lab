import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
      {movies.map((movie) => (
      <div className="movie"> 
        {movie.title}
        {movie.time}
        {movie.genres.map((genre) => (
          <p className="genre">{genre}</p>)
          )}
      </div>
  ))}
  </div>
  );
};

export default Movies;
