"use client";

import { useFetchMovies } from "@/hooks/useFetchMovies";
import { MovieItem } from "../MovieItem/MovieItem";

export const MoviesList = () => {
  const { movies, loading, errorLoading, movie } = useFetchMovies();
  return (
    <div>
      {!!movie ? (
        <MovieItem movie={movie} />
      ) : (
        <ul>
         {movies.map((movie, index) => (
            <li key={index}>
              <MovieItem movie={movie} />
            </li>
          ))}
        </ul>
      )}
      {errorLoading && <div>Error loadding</div>}
    </div>
  );
};
