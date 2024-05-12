type CoverImageProps = {
  imgSrc: string;
  title?: string;
};

function CoverImage({ imgSrc, title }: CoverImageProps) {
  return (
    <div className='w-full h-full bg-black absolute top-0 left-0'>
      <img
        src={`https://image.tmdb.org/t/p/original${imgSrc}`}
        alt={title}
        width='500'
        height='750'
        className='absolute inset-0 w-full h-full object-center object-cover brightness-50'
      />
    </div>
  );
}

export default CoverImage;
