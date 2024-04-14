import { IMovie } from "@/types/IMovie";
import "./MovieItem.scss";

export const MovieItem = ({ movie }: { movie: IMovie | null }) => {
  return (
    <div className="movie-item">
      <img
        src={movie?.Poster}
        alt={`${movie?.Title} poster`}
        className="movie-item__poster"
      />

      <div className="movie-item__wrapper">
        <h1 className="movie-item__title">{movie?.Title}</h1>
        <span>{movie?.Year}</span>
      </div>
    </div>
  );
};
