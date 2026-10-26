import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SearchBar from "./SearchBar";

type HeaderProps = {
  searchQuery: string;
  onChange: (value: string) => void;
};

const HeaderComponent = ({ searchQuery, onChange }: HeaderProps) => {
  const { theme, toggleTheme, favorites } = useAppContext();

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <div className="brand-logo">
            <div className="logo-dot"></div>
            <span className="logo-text">CINE·GRID</span>
          </div>

          <nav className="header-nav">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">
              About
            </NavLink>
          </nav>
        </div>

        <div className="header-search">
          <SearchBar query={searchQuery} onChange={onChange} />
        </div>

        <div className="header-actions">
          <NavLink to="/watchlist" className="btn-icon-label">
            Watchlist {favorites.length}
          </NavLink>

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M21 12.79A9 9 0 0 1 11.21 3 9 9 0 1 0 21 12.79Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
