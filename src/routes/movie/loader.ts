import { MovieDetailsResult } from '@/types/movie';
import axiosInstance from '@/utils/axios';
import { LoaderFunctionArgs } from 'react-router-dom';

async function movieLoader({ params, request }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Error('No movie ID provided');
  }
  const data = await axiosInstance
    .get<MovieDetailsResult>(`movie/${params.id}?append_to_response=videos&language=en-US`, {
      signal: request.signal,
    })
    .then(res => res.data);

  return { movie: data };
}

export default movieLoader;
