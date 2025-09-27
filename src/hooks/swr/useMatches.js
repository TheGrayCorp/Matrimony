import useSWRInfinite from "swr/infinite";
import { fetcher } from "../../lib/fetcher";
import { API_ENDPOINTS } from "../../services/apiEndPoints/ApiEndpoints";

export const useMatches = (clientDocId, matchParams = {}, enabled = true) => {
  const getKey = (pageIndex, previousPageData) => {
    if (!enabled || !clientDocId) return null;
    if (previousPageData && !previousPageData.length) return null;
    const page = pageIndex + 1;
    const {
      clientRasi = "",
      clientNatstram = "",
      clientGender = "",
    } = matchParams;
    return `${API_ENDPOINTS.GET_MATCHES}?docId=${clientDocId}&numOfScroll=${page}&clientRasi=${clientRasi}&clientNatstram=${clientNatstram}&clientGender=${clientGender}`;
  };

  const { data, error, isLoading, size, setSize, mutate } = useSWRInfinite(
    getKey,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateFirstPage: false,
    }
  );

  const profiles = data ? data.map((page) => page.clients).flat() : [];
  const totalCount = data ? data[data.length - 1]?.totalCount : 0;
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.clients?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.clients?.length < 25);

  return {
    profiles,
    totalCount,
    isLoading,
    isError: error,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    setSize,
    mutate,
  };
};
