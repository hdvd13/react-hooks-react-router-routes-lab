import React from "react";
import { actors } from "../data";

const actorsToDisplay = actors.map((actor) => {
  const movieList = actor.movies.map((movie) => <li key={movie}>{movie}</li>);
  return (
    <div key={actor.name}>
      <h2>Name: {actor.name}</h2>
      <ul>{movieList}</ul>
    </div>
  );
});

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsToDisplay}
    </div>
  );
}

export default Actors;