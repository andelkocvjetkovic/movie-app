import Card from '@/components/card';
import { MovieListResult } from '@/types/movie';

type MovieListProps = {
  list: MovieListResult[];
};

function MovieList({ list }: MovieListProps) {
  return (
    <ul>
      {list.map(movie => (
        <li key={movie.id}>
          <Card title={movie.title} imgSrc={movie.poster_path} to={`/movie/${movie.id}`} />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
