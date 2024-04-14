import { IMovie } from "@/types/IMovie";
import { Loader } from "@/components/Loader/Loader";
import stabImage from "@/assets/stab-poster.png";
import Image from "next/image";
import "./MovieItem.scss";

export const MovieItem = ({
  movie,
  loading,
}: {
  movie: IMovie | null;
  loading: boolean;
}) => {
  return (
    <div className="movie-item">
      {loading ? (
        <Loader />
      ) : (
        <>
          {movie?.Poster !== 'N/A' ? (
            <img
              src={movie?.Poster as string}
              alt={`${movie?.Title} poster`}
              className="movie-item__poster"
              loading="lazy"
            />
          ) : (
            <Image src={stabImage} alt="There is no poster to this film" className="movie-item__poster" />
          )}

          <div className="movie-item__wrapper">
            <h1 className="movie-item__title">{movie?.Title}</h1>
            <span>{movie?.Year}</span>
          </div>
        </>
      )}
    </div>
  );
};
