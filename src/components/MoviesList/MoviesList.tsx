import { MovieItem } from "../MovieItem/MovieItem";
import { IMovie } from "@/types/IMovie";
import './MoviesList.scss';

export const MoviesList = ({
  movies,
  loading,
}: {
  movies: IMovie[];
  loading: boolean;
}) => {
  return (
    <ul className="movies-list">
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <MovieItem movie={movie} loading={loading} />
        </li>
      ))}
    </ul>
  );
};
