import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useGenres } from "../hooks/useGenres";
import MovieList from "../components/MovieList";

const WatchlistPage = () => {
  const { favorites } = useAppContext();
  const { genres } = useGenres();

  if (favorites.length === 0) {
    return (
      <main className="main-container">
        <div className="empty-state">
          <h2 className="empty-title">Your watchlist is empty</h2>
          <p className="empty-text">
            Click the ♥ on a movie to add it here.
          </p>
          <Link to="/">Browse movies</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="main-container">
      <h1>My Watchlist ({favorites.length})</h1>
      <MovieList movies={favorites} genres={genres} />
    </main>
  );
};

export default WatchlistPage;