import tvShowLoader from '@/routes/tv-show/loader';
import { tvShowDetailsOptions } from '@/utils/query-options';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';

function TvShow() {
  const { id } = useLoaderData() as Awaited<ReturnType<typeof tvShowLoader>>;
  const { data: tvShow } = useSuspenseQuery(tvShowDetailsOptions(id));
  return (
    <div>
      <pre>{JSON.stringify(tvShow, null, 2)}</pre>
    </div>
  );
}

export default TvShow;
