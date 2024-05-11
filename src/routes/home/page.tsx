import Either from '@/components/either';
import MovieList from '@/components/movie-list';
import TvShowList from '@/components/tv-show-list';
import homeLoader from '@/routes/home/loader';
import { MovieListResult } from '@/types/movie';
import { TVShowListResult } from '@/types/tv-show';
import { useState } from 'react';
import { useLoaderData, useLocation, useNavigation, useSubmit } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';

function Home() {
  const { list, tab, q } = useLoaderData() as Awaited<ReturnType<typeof homeLoader>>;
  const submit = useSubmit();
  const location = useLocation();
  const [query, setQuery] = useState(q);
  const navigation = useNavigation();
  const updateQuery = useDebouncedCallback((search: string, value: string) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('q', value);
    submit(searchParams);
  }, 1000);

  const searching =
    navigation.location &&
    (new URLSearchParams(navigation.location.search).has('q') || new URLSearchParams(navigation.location.search).has('tab'));
  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <input
            id='q'
            aria-label='Search contacts'
            placeholder='Search'
            type='search'
            name='q'
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              updateQuery(location.search, e.target.value);
            }}
          />
          <div id='search-spinner' aria-hidden hidden={true} />
          <div className='sr-only' aria-live='polite'></div>
        </div>
        <div className='flex gap-x-2'>
          <button
            name='movie'
            style={{ backgroundColor: tab === 'movie' ? 'blue' : '' }}
            onClick={() => {
              const searchParams = new URLSearchParams(location.search);
              searchParams.set('tab', 'movie');
              submit(searchParams);
            }}
          >
            Movie
          </button>
          <button
            name='tv-show'
            style={{ backgroundColor: tab === 'tv-show' ? 'blue' : '' }}
            onClick={() => {
              const searchParams = new URLSearchParams(location.search);
              searchParams.set('tab', 'tv-show');
              submit(searchParams);
            }}
          >
            TV Show
          </button>
        </div>
      </div>
      <div
        style={{
          opacity: searching ? 0.5 : 1,
        }}
      >
        <Either condition={tab === 'tv-show'} fallback={<MovieList list={list.results as MovieListResult[]} />}>
          <TvShowList list={list.results as TVShowListResult[]} />
        </Either>
      </div>
    </div>
  );
}

export default Home;
