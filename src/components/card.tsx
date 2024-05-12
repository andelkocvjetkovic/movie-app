import { Link } from 'react-router-dom';

type CardProps = {
  imgSrc: string;
  title: string;
  to: string;
};

function Card({ imgSrc, title, to }: CardProps) {
  return (
    <li className='border-2 border-black relative group overflow-hidden'>
      <Link to={to} className='absolute inset-0 z-10' />
      <figure className='flex flex-col'>
        <div className='aspect-[9/16] bg-black relative'>
          <img
            src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
            alt={title}
            width='500'
            height='750'
            className='absolute inset-0 w-full h-full object-top object-cover group-hover:scale-105 transition-transform duration-500'
          />
        </div>
        <figcaption className='text-lg text-black font-light py-2 px-2 border-t-2 border-black text-center relative z-10 bg-white'>
          {title}
        </figcaption>
      </figure>
    </li>
  );
}

export default Card;
