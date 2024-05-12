# Movie App

This is a simple movie app that allows users to search for movies/tv shows and view details about them.
The app uses the [The Movie Database API](https://developers.themoviedb.org/3) to fetch movie data.
Please add your read access token to environment variables in the `.env` file.

```bash
VITE_THEMOVIEDB_API_KEY_READ="YOUR_API_KEY_HERE"

```

## Development

The App is built using [Vite](https://vitejs.dev/). To start the development server, run the following commands:

```bash
bun install
bun run dev

```

To run eslint, prettier and typescript checks, run the following commands:

```bash
bun run lint
bun run format
bun run tsc

```


