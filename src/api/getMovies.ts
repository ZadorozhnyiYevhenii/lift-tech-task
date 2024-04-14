import { IMovie } from "@/types/IMovie";
import { API_KEY, BASE_URL } from "./core";

export const getMovies = async (movieName: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/?apikey=${API_KEY}&t=${movieName}`
    );
    const movies = await response.json();

    return movies;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
