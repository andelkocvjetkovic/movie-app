import { queryClient } from '@/utils/react-query';

function Movie() {
  return <div>Movie</div>;
}

export async function loader() {
  return queryClient.ensureQueryData();
}

export default Movie;
