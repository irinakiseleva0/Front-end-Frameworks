import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import type { ReactNode } from "react";
import type { Movie } from "../types";

type Theme = "dark" | "light";

type State = {
  favorites: Movie[];
  theme: Theme;
};

type Action =
  | { type: "SET_THEME" }
  | { type: "TOGGLE_FAVOURITE"; payload: Movie };

type AppContextType = {
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
  isFavorite: (movieId: number) => boolean;
  theme: Theme;
  toggleTheme: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };

    case "TOGGLE_FAVOURITE": {
      const exists = state.favorites.some(
        (movie) => movie.id === action.payload.id
      );

      return {
        ...state,
        favorites: exists
          ? state.favorites.filter(
              (movie) => movie.id !== action.payload.id
            )
          : [...state.favorites, action.payload],
      };
    }

    default:
      return state;
  }
};

const getInitialState = (): State => {
  let favorites: Movie[] = [];

  try {
    const saved = localStorage.getItem("cinegrid_favorites");
    if (saved) {
      const parsed: unknown = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        favorites = parsed as Movie[];
      }
    }
  } catch {
    favorites = [];
  }

  const savedTheme = localStorage.getItem("cinegrid_theme");

  const theme: Theme =
    savedTheme === "light" ? "light" : "dark";

  return { favorites, theme };
};

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    reducer,
    undefined,
    getInitialState
  );

  const toggleFavorite = (movie: Movie) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: movie,
    });
  };

  const isFavorite = (movieId: number) => {
    return state.favorites.some(
      (movie) => movie.id === movieId
    );
  };

  const toggleTheme = () => {
    dispatch({ type: "SET_THEME" });
  };

  useEffect(() => {
    localStorage.setItem(
      "cinegrid_favorites",
      JSON.stringify(state.favorites)
    );
  }, [state.favorites]);

  useEffect(() => {
    localStorage.setItem("cinegrid_theme", state.theme);
    document.documentElement.setAttribute(
      "data-theme",
      state.theme
    );
  }, [state.theme]);

  return (
    <AppContext.Provider
      value={{
        favorites: state.favorites,
        toggleFavorite,
        isFavorite,
        theme: state.theme,
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
