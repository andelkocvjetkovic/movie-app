import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/inter';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from '@/routes/root.tsx';
import ErrorPage from '@/routes/error-page';
import Home from '@/routes/home';
import { queryClient } from '@/utils/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import TvShow from '@/routes/tv-show/page';
import Movie from '@/routes/movie/page';
import movieLoader from '@/routes/movie/loader';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tv-show/:id',
        element: <TvShow />,
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
