import useSWRInfinite from "swr/infinite";
import { fetcher } from "../../lib/fetcher";
import { API_ENDPOINTS } from "../../services/apiEndPoints/ApiEndpoints";

export const useExploreProfiles = (
  clientDocId,
  filters = {},
  enabled = true
) => {
  const getKey = (pageIndex, previousPageData) => {
    if (!enabled || !clientDocId) return null;
    if (previousPageData && !previousPageData.length) return null;
    const page = pageIndex + 1;
    const { clientRasi = "", clientNatstram = "", clientGender = "" } = filters;
    return `${API_ENDPOINTS.GET_EXPLORE}?docId=${clientDocId}&numOfScroll=${page}&clientRasi=${clientRasi}&clientNatstram=${clientNatstram}&clientGender=${clientGender}`;
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

  const profiles = data ? data.flat() : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 25);

  return {
    profiles,
    isLoading,
    isError: error,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    setSize,
    mutate,
  };
};
