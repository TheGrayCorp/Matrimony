import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";

export const useUserProfile = (docId) => {
  const key = docId ? `/getClientDataByDocId?docId=${docId}` : null;

  const { data, error, isLoading, mutate, isValidating } = useSWR(key, fetcher, {
    revalidateOnFocus: false,
  });

  return {
    profile: data,
    isLoading,
    isValidating,
    isError: error,
    mutate,
  };
};
