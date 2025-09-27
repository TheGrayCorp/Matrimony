import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import { API_ENDPOINTS } from "../../services/apiEndPoints/ApiEndpoints";

export const useUserProfile = (docId) => {
  const key = docId ? `${API_ENDPOINTS.GET_CLIENT_DATA}?docId=${docId}` : null;

  const { data, error, isLoading, mutate, isValidating } = useSWR(
    key,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    profile: data,
    isLoading,
    isValidating,
    isError: error,
    mutate,
  };
};
