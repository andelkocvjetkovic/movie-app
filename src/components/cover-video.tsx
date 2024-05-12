import YouTube from 'react-youtube';

type CoverVideoProps = {
  videoId: string;
};

const opts = {
  width: '100%',
  height: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    mute: 1,
    controls: 0,
    modestbranding: 1,
    showinfo: 0,
    cc_load_policy: 1,
    iv_load_policy: 3,
    rel: 0,
    showsearch: 0,
  },
};

function CoverVideo({ videoId }: CoverVideoProps) {
  return (
    <div className='absolute w-full h-full overflow-hidden bg-black top-0 left-0 brightness-50'>
      <YouTube videoId={videoId} opts={opts} className='absolute inset-0 w-full h-full' />
    </div>
  );
}

export default CoverVideo;
