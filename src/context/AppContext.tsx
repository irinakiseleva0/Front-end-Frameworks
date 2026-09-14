import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Movie } from "../types";

type Theme = "dark" | "light";

type AppContextType = {
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
  isFavorite: (movieId: number) => boolean;
  theme: Theme;
  toggleTheme: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

const getInitialFavorites = (): Movie[] => {
  const saved = localStorage.getItem("cinegrid_favorites");

  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
};

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem("cinegrid_theme");

  if (saved === "light" || saved === "dark") {
    return saved;
  }

  return "dark";
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [favorites, setFavorites] =
    useState<Movie[]>(getInitialFavorites);

  const [theme, setTheme] =
    useState<Theme>(getInitialTheme);

  const toggleFavorite = (movie: Movie) => {
    setFavorites((current) => {
      const exists = current.some(
        (item) => item.id === movie.id
      );

      if (exists) {
        return current.filter(
          (item) => item.id !== movie.id
        );
      }

      return [...current, movie];
    });
  };

  const isFavorite = (movieId: number) => {
    return favorites.some(
      (movie) => movie.id === movieId
    );
  };

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "cinegrid_favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(
      "cinegrid_theme",
      theme
    );

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext must be used within an AppProvider"
    );
  }

  return context;
};