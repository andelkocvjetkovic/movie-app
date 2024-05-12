import Card from '@/components/card';
import CardList from '@/components/card-list';
import { TVShowListResult } from '@/types/tv-show';

type TvShowListProps = {
  list: TVShowListResult[];
};

function TvShowList({ list }: TvShowListProps) {
  return (
    <CardList>
      {list.map(tvShow => (
        <Card key={tvShow.id} title={tvShow.name} imgSrc={tvShow.poster_path} to={`/tv-show/${tvShow.id}`} />
      ))}
    </CardList>
  );
}

export default TvShowList;
