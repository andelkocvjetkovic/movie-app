import Button from '@/components/button';
import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <main className='h-screen flex items-center justify-center'>
      <div className='border border-black px-6 py-6'>
        <h1 className='text-2xl pb-1'>Oops! Something went wrong.</h1>
        <p className='text-base pb-1'>An unexpected error has occurred.</p>
        <p className='text-base pb-4'>{error instanceof Error ? error.message : 'Unexpected error'}</p>
        <Button variant='primary' asChild className='inline-flex gap-x-2'>
          <Link to='/'>Go back</Link>
        </Button>
      </div>
    </main>
  );
}

export default ErrorPage;
