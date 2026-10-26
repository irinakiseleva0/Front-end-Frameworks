import type { Movie } from "../types";

type MovieModalProps = {
  movie: Movie;
  onClose: () => void;
};

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-body">
          <div className="modal-content-details">
            <h2 className="modal-title">{movie.title}</h2>

            <div>
              <h3 className="modal-overview-heading">Overview</h3>
              <p className="modal-overview">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;