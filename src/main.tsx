import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/inter';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from '@/routes/root.tsx';
import ErrorPage from '@/routes/error-page';
import Home from '@/routes/home/page';
import TvShow from '@/routes/tv-show/page';
import Movie from '@/routes/movie/page';
import movieLoader from '@/routes/movie/loader';
import tvShowLoader from '@/routes/tv-show/loader';
import homeLoader from '@/routes/home/loader';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: '/tv-show/:id',
        element: <TvShow />,
        loader: tvShowLoader,
      },
      {
        path: 'movie/:id',
        element: <Movie />,
        loader: movieLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
