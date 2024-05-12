import Button from '@/components/button';
import CardListNoResult from '@/components/card-list-no-result';
import Either from '@/components/either';
import MovieList from '@/components/movie-list';
import SearchField from '@/components/search-field';
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

  const isSearching =
    navigation.location &&
    (new URLSearchParams(navigation.location.search).has('q') || new URLSearchParams(navigation.location.search).has('tab'));

  return (
    <div className='container py-2 px-2'>
      <div className='flex flex-col gap-y-4'>
        <div className='flex gap-x-2'>
          <Button
            variant='tab'
            isActive={tab === 'movie'}
            onClick={() => {
              const searchParams = new URLSearchParams(location.search);
              searchParams.set('tab', 'movie');
              submit(searchParams);
            }}
          >
            Movie
          </Button>
          <Button
            name='tv-show'
            variant='tab'
            isActive={tab === 'tv-show'}
            onClick={() => {
              const searchParams = new URLSearchParams(location.search);
              searchParams.set('tab', 'tv-show');
              submit(searchParams);
            }}
          >
            TV Show
          </Button>
        </div>
        <SearchField
          className='block'
          aria-label='Search contacts'
          placeholder='Search'
          type='search'
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            updateQuery(location.search, e.target.value);
          }}
        />
      </div>
      <div
        className='py-6'
        style={{
          opacity: isSearching ? 0.5 : 1,
        }}
      >
        <Either condition={list.results.length > 0} fallback={<CardListNoResult />}>
          <Either condition={tab === 'tv-show'} fallback={<MovieList list={list.results as MovieListResult[]} />}>
            <TvShowList list={list.results as TVShowListResult[]} />
          </Either>
        </Either>
      </div>
    </div>
  );
}

export default Home;
