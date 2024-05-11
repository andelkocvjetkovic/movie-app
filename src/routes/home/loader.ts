import { MovieListResult } from '@/types/movie';
import { TVShowListResult } from '@/types/tv-show';
import { DBResponseList } from '@/types/utils';
import axiosInstance from '@/utils/axios';
import { LoaderFunctionArgs } from 'react-router-dom';

async function homeLoader({ request }: LoaderFunctionArgs) {
  const { signal } = request;
  const url = new URL(request.url);
  const tab = url.searchParams.get('tab') ?? 'tv-show';
  const q = url.searchParams.get('q') ?? '';

  if (q.trim().length < 4) {
    return {
      list: tab === 'tv-show' ? await topRatedTvShows(signal) : await topRatedMovies(signal),
      tab,
      q,
    };
  }
  return {
    list: tab === 'tv-show' ? await searchTvShows(q, signal) : await seachMovies(q, signal),
    tab,
    q,
  };
}

export default homeLoader;

async function topRatedMovies(signal: AbortSignal) {
  return await axiosInstance
    .get<DBResponseList<MovieListResult>>('movie/top_rated', {
      signal,
    })
    .then(res => res.data);
}

async function seachMovies(query: string, signal: AbortSignal) {
  return await axiosInstance
    .get<DBResponseList<MovieListResult>>('search/movie', { params: { query }, signal })
    .then(res => res.data);
}

async function topRatedTvShows(signal: AbortSignal) {
  return await axiosInstance
    .get<DBResponseList<TVShowListResult>>('tv/top_rated', {
      signal,
    })
    .then(res => res.data);
}

async function searchTvShows(query: string, signal: AbortSignal) {
  return await axiosInstance
    .get<DBResponseList<TVShowListResult>>('search/tv', { params: { query }, signal })
    .then(res => res.data);
}
