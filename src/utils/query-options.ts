import axiosInstance from '@/utils/axios';
import { queryOptions } from '@tanstack/react-query';
import type { MovieListResult, MovieDetailsResult } from '@/types/movie';
import type { TVShowListResult, TVShowDetailsResult } from '@/types/tv-show';

type DBResponseList<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export const movieTopTenOptions = () =>
  queryOptions({
    queryKey: ['movie', 'top-ten'],
    queryFn: () => axiosInstance.get<DBResponseList<MovieListResult>>('movie/top_rated').then(res => res.data),
  });

export const movieSearchOptions = (query: string) =>
  queryOptions({
    queryKey: ['movie', 'search', query],
    queryFn: () =>
      axiosInstance.get<DBResponseList<MovieListResult>>('search/movie', { params: { query } }).then(res => res.data),
  });

export const movieDetailsOptions = (id: string) =>
  queryOptions({
    queryKey: ['movie', 'details', id],
    queryFn: () => axiosInstance.get<MovieDetailsResult>(`movie/${id}?language=en-US`).then(res => res.data),
  });

export const tvShowTopTenOptions = () =>
  queryOptions({
    queryKey: ['shows', 'top-ten'],
    queryFn: () => axiosInstance.get<DBResponseList<TVShowListResult>>('tv/top_rated').then(res => res.data),
  });

export const tvShowSearchOptions = (query: string) =>
  queryOptions({
    queryKey: ['shows', 'search', query],
    queryFn: () => axiosInstance.get<DBResponseList<TVShowListResult>>('search/tv', { params: { query } }).then(res => res.data),
  });

export const tvShowDetailsOptions = (id: number) =>
  queryOptions({
    queryKey: ['shows', 'details', id],
    queryFn: () => axiosInstance.get<TVShowDetailsResult>(`tv/${id}`).then(res => res.data),
  });
