import { PropsWithChildren } from 'react';

function CardList({ children }: PropsWithChildren) {
  return (
    <ul className='flex flex-col gap-y-4 sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 xl:grid-cols-4 2xl:grid-cols-5'>
      {children}
    </ul>
  );
}

export default CardList;
