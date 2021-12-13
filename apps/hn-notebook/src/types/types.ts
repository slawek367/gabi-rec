export interface SearchQuery {
  query: string;
  creation_date: string;
  total_hits: number;
}

export interface SearchResult {
  author: string; //login name
  karma_points: number;
  url: string;
  creation_date: string;
  hn_tags: string[];
  search_query_id: string;
  id: number;
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
