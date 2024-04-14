export interface IMovie {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

export interface IMovieResponse {
  Response: string;
  Search: IMovie[];
}
