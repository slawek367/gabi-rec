import { useQuery } from 'react-query';
import { api } from '../../api';

export const useHnSearch = (query: string) => {
  return useQuery<any>(
    ['hnSearch', query],
    async (): Promise<any> => {
      const res = await api.get(`/search?query=${query}`);
      return res;
    },
    {
      enabled: false,
      onError: (err) => console.error(err),
    }
  );
};
