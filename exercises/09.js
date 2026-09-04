// ## Part 2 — Modules, Array Methods, async/await, Optional Chaining
// ### Exercise 9 — Optional Chaining and Nullish Coalescing

const movie1 = {
  title: "Inception",
  tagline: "Your mind is the scene of the crime.",
  director: { name: "Christopher Nolan" },
  cast: [{ name: "Leonardo DiCaprio" }, { name: "Elliot Page" }],
};

const movie2 = {
  title: "Unknown Film",
  tagline: "",
  // no director, no cast
};

// 1. Safely access movie2.director.name
const directorName = movie2.director?.name;

// 2. Display tagline or "No tagline"
const tagline = movie2.tagline || "No tagline";

// 3. Safely get the first cast member's name
const firstCastName = movie2.cast?.[0]?.name;

// 4. First cast member's name or fallback
const castName = movie2.cast?.[0]?.name ?? "Unknown cast";

// 5. Format poster URL
function formatPosterUrl(movie) {
  const posterPath = movie?.poster_path;

  return posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "https://placehold.co/500x750?text=No+Image";
}

const tmdbMovie = {
  title: "Inception",
  poster_path: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
};

const tmdbMovieNoPoster = {
  title: "Obscure Film",
  poster_path: null,
};

console.log(formatPosterUrl(tmdbMovie));
console.log(formatPosterUrl(tmdbMovieNoPoster));