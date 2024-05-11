import tvShowLoader from '@/routes/tv-show/loader';
import { useLoaderData } from 'react-router-dom';

function TvShow() {
  const { tvShow } = useLoaderData() as Awaited<ReturnType<typeof tvShowLoader>>;
  return (
    <div>
      <pre>{JSON.stringify(tvShow, null, 2)}</pre>
    </div>
  );
}

export default TvShow;
