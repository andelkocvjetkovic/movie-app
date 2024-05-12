import Card from '@/components/card';
import CardList from '@/components/card-list';
import { MovieListResult } from '@/types/movie';

type MovieListProps = {
  list: MovieListResult[];
};

function MovieList({ list }: MovieListProps) {
  return (
    <CardList>
      {list.map(movie => (
        <Card key={movie.id} title={movie.title} imgSrc={movie.poster_path} to={`/movie/${movie.id}`} />
      ))}
    </CardList>
  );
}

export default MovieList;
