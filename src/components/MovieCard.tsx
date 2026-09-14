import { useState } from "react";
import type { Movie } from "../types";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://placehold.co/500x750?text=No+Image";

    return (
        <article
            className="movie-card"
            tabIndex={0}
            aria-label={movie.title}
        >
            <div className="poster-wrapper">
                <img
                    src={posterUrl}
                    alt={movie.title}
                    className="poster-img"
                    loading="lazy"
                />

                <div className="poster-overlay">
                    <div className="card-top-badges">
                        <span className="rating-badge">
                            {(movie.vote_average ?? 0).toFixed(1)}
                        </span>

                        <button
                            className={`favorite-btn ${isFavorite ? "active" : ""}`}
                            title={
                                isFavorite
                                    ? "Remove from favourites"
                                    : "Add to favourites"
                            }
                            aria-label={
                                isFavorite
                                    ? "Remove from favourites"
                                    : "Add to favourites"
                            }
                            onClick={() => setIsFavorite(!isFavorite)}

                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </button>
                    </div>

                    <span className="quick-view-hint">View Details</span>
                </div>
            </div>

            <div className="movie-card-info">
                <h2 className="movie-card-title">{movie.title}</h2>

                <div className="movie-card-meta">
                    <span>{movie.release_date?.slice(0, 4)}</span>
                    <span>{movie.vote_count} votes</span>
                </div>
            </div>
        </article>
    );
};

export default MovieCard;