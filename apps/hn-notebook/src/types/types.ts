export interface SearchQuery {
  query: string;
  creation_date: string;
  total_hits: number;
}

export interface SearchResult {
  objectID: number;
  author: string; //login name
  points: number;
  url: string;
  created_at: string;
  _tags: string[];
}

export interface SearchNotebook {
  title: string;
  creation_date: string;
  search_results: SearchResult[];
}

/*

Widok Notebooks:
- Tworzenie nowego notebooka (w modalu albo podstronie)
- Przeglądanie notebooków (lista?)
- Wyszukiwanie notebooków (search w liscie?)

Home:
- 
*/
