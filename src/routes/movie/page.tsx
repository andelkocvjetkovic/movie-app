import movieLoader from '@/routes/movie/loader';
import { movieDetailsOptions } from '@/utils/query-options';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';

function Movie() {
  const { id } = useLoaderData() as Awaited<ReturnType<typeof movieLoader>>;
  const { data: movie } = useSuspenseQuery(movieDetailsOptions(id));
  return (
    <div>
      <pre>{JSON.stringify(movie, null, 2)}</pre>
    </div>
  );
}

export default Movie;
