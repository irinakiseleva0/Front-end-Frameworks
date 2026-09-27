const API_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const getPopularMovies = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();

  return data.results;
};