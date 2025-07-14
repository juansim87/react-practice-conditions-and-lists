import { useState } from "react";
import "./MovieFavorites.css";

const INIT_MOVIE_LIST = [
  { id: 1, title: "El laberinto del fauno" },
  { id: 2, title: "Mar adentro" },
  { id: 3, title: "Ocho apellidos vascos" },
];

export const MovieFavorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState(INIT_MOVIE_LIST);

  const handleDelete = (id) => {
    setFavoriteMovies((prev) => prev.filter(element => element.id !== id))
  }

  return (
    <div>
      <h2>Películas favoritas</h2>
      <ul>
        {favoriteMovies.map((movie) => (
          <li key={movie.id}>
          <span>{movie.title}</span>
          <span><button onClick={() => handleDelete(movie.id)}>Borrar</button></span>
          </li>
        ))}
      </ul>
    </div>
  );
};
