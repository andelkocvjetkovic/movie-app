import { MovieListResult } from '@/types/movie';
import { Link } from 'react-router-dom';

type MovieListProps = {
  list: MovieListResult[];
};

function MovieList({ list }: MovieListProps) {
  return (
    <ul>
      {list.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
