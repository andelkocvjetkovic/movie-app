export type DBResponseList<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type VideoResult = {
  results: Array<{
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
  }>;
};
