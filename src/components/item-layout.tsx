import ButtonIcon from '@/components/button-icon';
import CoverImage from '@/components/cover-image';
import CoverVideo from '@/components/cover-video';
import Either from '@/components/either';
import { VideoResult } from '@/types/utils';
import { ArrowLeft } from 'lucide-react';
import { PropsWithChildren, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

type CoverImageProps = PropsWithChildren<{
  videos: VideoResult;
  posterPath: string;
  alt?: string;
}>;

function ItemLayout({ videos, children, posterPath, alt }: CoverImageProps) {
  const navigate = useNavigate();

  const triler = useMemo(
    () =>
      Array.isArray(videos.results) && videos.results.length > 0
        ? videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube')
        : undefined,
    [videos.results]
  );
  return (
    <section className='flex flex-col gap-y-4 py-4 relative h-screen w-screen'>
      <nav className='absolute top-4 left-6 z-10'>
        <ButtonIcon
          variant='primary'
          type='button'
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowLeft />
        </ButtonIcon>
      </nav>
      <Either condition={triler != undefined} fallback={<CoverImage imgSrc={posterPath} title={alt} />}>
        <CoverVideo videoId={triler?.key as string} />
      </Either>
      <div className='absolute bottom-8 left-6 right-4 z-10 text-white md:max-w-md'>{children}</div>
    </section>
  );
}

export default ItemLayout;
