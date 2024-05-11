import { TVShowListResult } from '@/types/tv-show';
import { Link } from 'react-router-dom';

type TvShowListProps = {
  list: TVShowListResult[];
};

function TvShowList({ list }: TvShowListProps) {
  return (
    <ul>
      {list.map(tvShow => (
        <li key={tvShow.id}>
          <Link to={`/tv-show/${tvShow.id}`}>{tvShow.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TvShowList;
