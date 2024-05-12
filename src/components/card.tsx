import { Link } from 'react-router-dom';

type CardProps = {
  imgSrc: string;
  title: string;
  to: string;
};

function Card({ imgSrc, title, to }: CardProps) {
  return (
    <figure>
      <img src={`https://image.tmdb.org/t/p/w500${imgSrc}`} alt={title} />
      <figcaption>
        <Link to={to}>{title}</Link>
      </figcaption>
    </figure>
  );
}

export default Card;
