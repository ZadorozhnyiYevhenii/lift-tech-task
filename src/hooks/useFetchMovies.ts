import { useEffect, useState } from "react";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {}, []);

  return { movies, loading, errorLoading };
};
