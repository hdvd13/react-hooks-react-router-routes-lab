import React from "react";
import { directors } from "../data";

const directorsToDisplay = directors.map((director) => {
  const movieList = director.movies.map((movie) => (
    <li key={movie}>{movie}</li>
  ));
  return (
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
      <p>Movies:</p>
      <ul>{movieList}</ul>
    </div>
  );
});

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsToDisplay}
    </div>
  );
}

export default Directors;