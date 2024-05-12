import Card from '@/components/card';
import { TVShowListResult } from '@/types/tv-show';

type TvShowListProps = {
  list: TVShowListResult[];
};

function TvShowList({ list }: TvShowListProps) {
  return (
    <ul>
      {list.map(tvShow => (
        <li key={tvShow.id}>
          <Card title={tvShow.name} imgSrc={tvShow.poster_path} to={`/tv-show/${tvShow.id}`} />
        </li>
      ))}
    </ul>
  );
}

export default TvShowList;
