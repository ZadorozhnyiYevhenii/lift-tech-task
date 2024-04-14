import { getMovies } from "@/api/getMovies";
import { StorageKeys } from "@/constants/localStorageKeys";
import { IMovie } from "@/types/IMovie";
import { useEffect, useState } from "react";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  const movieName = JSON.parse(
    localStorage.getItem(StorageKeys.MOVIE_NAME) as string
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovies(movieName);

        if (data.Response === "False") {
          setErrorLoading(true);
        }

        Array.isArray(data)
          ? setMovies(data)
          : setMovie(data);
      } catch (error) {
        setErrorLoading(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, errorLoading, movie };
};
