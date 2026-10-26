import { useState } from "react";
import type { Movie } from "../types";

import { useMovies } from "../hooks/useMovies";
import { useGenres } from "../hooks/useGenres";
import MovieList from "../components/MovieList";
import MovieModal from "../components/MovieModal";

interface HomePageProps {
  searchQuery?: string;
}

const apiUrl =
  `${import.meta.env.VITE_TMDB_BASE_URL}/movie/popular?language=en-US&page=1`;

const HomePage = ({ searchQuery = "" }: HomePageProps) => {
  const { movies, loading, error } = useMovies(apiUrl);
  const { genres } = useGenres();

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="main-container">
      {loading && <p>Loading...</p>}

      {error && <p>Something went wrong.</p>}

      {!loading && !error && (
        <>
          <MovieList
            movies={filteredMovies}
            genres={genres}
            onMovieClick={setSelectedMovie}
          />

          {selectedMovie && (
            <MovieModal
              movie={selectedMovie}
              onClose={() => setSelectedMovie(null)}
            />
          )}
        </>
      )}
    </main>
  );
};

export default HomePage;