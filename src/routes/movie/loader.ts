import { movieDetailsOptions } from '@/utils/query-options';
import { queryClient } from '@/utils/react-query';
import { LoaderFunctionArgs } from 'react-router-dom';

async function movieLoader({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Error('No movie ID provided');
  }
  await queryClient.ensureQueryData(movieDetailsOptions(params.id));
  return { id: params.id };
}

export default movieLoader;
