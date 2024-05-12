import { TVShowDetailsResult } from '@/types/tv-show';
import axiosInstance from '@/utils/axios';
import { LoaderFunctionArgs } from 'react-router-dom';

async function tvShowLoader({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Error('No tv show ID provided');
  }
  const data = await axiosInstance
    .get<TVShowDetailsResult>(`tv/${params.id}?append_to_response=videos&language=en-US`)
    .then(res => res.data);
  return { tvShow: data };
}

export default tvShowLoader;
