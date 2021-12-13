import { useQuery } from 'react-query';
import { api } from '../../api';

// Info from api
// "you can only fetch the 1000 hits for this query.
// You can extend the number of hits returned via the paginationLimitedTo index parameter or use the browse method.
// You can read our FAQ for more details about browsing:
// https://www.algolia.com/doc/faq/index-configuration/how-can-i-retrieve-all-the-records-in-my-index"
const LIMIT_TO = 1000;

export const useHnSearch = (query: string) => {
  return useQuery<any>(
    ['hnSearch', query],
    async (): Promise<any> => {
      if (!query) {
        return [];
      }
      const res: { data: { hits?: [] } } = await api.get(
        `/search?query=${query}&hitsPerPage=${LIMIT_TO}`
      );
      return res.data?.hits || [];
    },
    {
      enabled: false,
      onError: (err) => console.error(err),
    }
  );
};
