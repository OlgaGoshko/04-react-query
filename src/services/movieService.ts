import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  results: Movie[];
  total_pages: number;
}

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovies = async (
  query: string,
  page: number,
): Promise<MoviesResponse> => {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await axios.get<MoviesResponse>(BASE_URL, {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
