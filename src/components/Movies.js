import React from "react";
import { movies } from "../data";

const moviesToDisplay = movies.map((movie) => {
  const genreList = movie.genres.map((genre) => <li key={genre}>{genre}</li>);
  return (
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>{genreList}</ul>
    </div>
  );
});

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesToDisplay}
    </div>
  );
}

export default Movies;