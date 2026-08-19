import { useState } from "react";

function MovieCard({ movie }) {
  const [favorite, setFavorite] = useState(false);

  function onFavoriteClick() {
    setFavorite((prev) => !prev);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.poster || "https://via.placeholder.com/300x450?text=No+Image"}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;