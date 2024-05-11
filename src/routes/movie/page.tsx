import movieLoader from '@/routes/movie/loader';
import { useLoaderData } from 'react-router-dom';

function Movie() {
  const { movie } = useLoaderData() as Awaited<ReturnType<typeof movieLoader>>;
  return (
    <div>
      <pre>{JSON.stringify(movie, null, 2)}</pre>
    </div>
  );
}

export default Movie;
