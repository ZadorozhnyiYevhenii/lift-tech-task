import { IMovieResponse } from "@/types/IMovie";
import { API_KEY, BASE_URL } from "./core";

export const getMovies = async (movieName: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/?apikey=${API_KEY}&s=${movieName}`
    );
    const movies: IMovieResponse = await response.json();

    return movies;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
