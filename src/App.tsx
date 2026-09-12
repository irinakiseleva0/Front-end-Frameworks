import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { SAMPLE_MOVIES } from "./data/sampleMovies";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [search, setSearch] = useState("");

  const filteredMovies = SAMPLE_MOVIES.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BrowserRouter>
      <div className="app-layout">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <main className="main-container">
                <h1>Movie App</h1>

                <SearchBar value={search} onChange={setSearch} />

                <MovieList movies={filteredMovies} />
              </main>
            }
          />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/home" element={<HomePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;