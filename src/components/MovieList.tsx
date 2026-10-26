import type { Movie, Genre } from "../types";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: Movie[];
  genres?: Genre[];
  onMovieClick?: (movie: Movie) => void;
}

const MovieList = ({
  movies,
  genres = [],
  onMovieClick,
}: MovieListProps) => {
  if (movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          genres={genres}
          onClick={() => onMovieClick?.(movie)}
        />
      ))}
    </div>
  );
};

export default MovieList;