import Button from '@/components/button';
import ItemLayout from '@/components/item-layout';
import movieLoader from '@/routes/movie/loader';
import { ArrowRight } from 'lucide-react';
import { useLoaderData } from 'react-router-dom';

function Movie() {
  const { movie } = useLoaderData() as Awaited<ReturnType<typeof movieLoader>>;

  return (
    <ItemLayout videos={movie.videos} posterPath={movie.poster_path} alt={movie.title}>
      <h1 className='text-4xl pb-2 font-light lg:text-5xl'>{movie.title}</h1>
      <p className='text-base font-light flex justify-between items-center pb-2'>
        <span>{new Date(movie.release_date).toLocaleDateString()}</span>
        <span>{movie.runtime && <p className='text-bse font-light'>{movie.runtime} minutes</p>}</span>
      </p>
      <p className='text-base pb-2'>{movie.genres.map(g => g.name).join(', ')}</p>
      <p className='text-sm font-light pb-4 lg:text-base'>{movie.overview}</p>
      <Button variant='primary' asChild className='inline-flex gap-x-2'>
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' rel='noreferrer'>
          More info <ArrowRight />
        </a>
      </Button>
    </ItemLayout>
  );
}

export default Movie;
