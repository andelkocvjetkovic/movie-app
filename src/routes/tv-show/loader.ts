import { tvShowDetailsOptions } from '@/utils/query-options';
import { queryClient } from '@/utils/react-query';
import { LoaderFunctionArgs } from 'react-router-dom';

async function tvShowLoader({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Error('No tv show ID provided');
  }
  await queryClient.ensureQueryData(tvShowDetailsOptions(params.id));
  return { id: params.id };
}

export default tvShowLoader;
