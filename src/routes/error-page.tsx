import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <div id='error-page' className='border border-black px-2 py-6'>
      <h1 className='text-2xl pb-1'>Oops!</h1>
      <p className='text-base pb-4'>Sorry, an unexpected error has occurred.</p>
      <p className='text-base'>{error instanceof Error ? error.message : 'Unexpected error'}</p>
    </div>
  );
}

export default ErrorPage;
