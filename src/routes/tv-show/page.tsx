import Button from '@/components/button';
import ItemLayout from '@/components/item-layout';
import tvShowLoader from '@/routes/tv-show/loader';
import { ArrowRight } from 'lucide-react';
import { useLoaderData } from 'react-router-dom';

function TvShow() {
  const { tvShow } = useLoaderData() as Awaited<ReturnType<typeof tvShowLoader>>;

  return (
    <ItemLayout videos={tvShow.videos} posterPath={tvShow.poster_path} alt={tvShow.name}>
      <h1 className='text-4xl pb-2 font-light lg:text-5xl'>{tvShow.name}</h1>
      <p className='text-sm font-light pb-4 lg:text-base'>{tvShow.overview}</p>
      <Button variant='primary' asChild className='inline-flex gap-x-2'>
        <a href={`https://www.themoviedb.org/tv/${tvShow.id}`} target='_blank' rel='noreferrer'>
          More info <ArrowRight />
        </a>
      </Button>
    </ItemLayout>
  );
}

export default TvShow;
