import { useMemo, useEffect } from "react";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { fetcher, multiFetcher } from "../../lib/fetcher";
import { API_ENDPOINTS } from "../../services/apiEndPoints/ApiEndpoints";

const PAGE_SIZE = 10;

export const useMyMates = (activeTab, clientDocId) => {
  const actionsKey = clientDocId
    ? `${API_ENDPOINTS.GET_CLIENT_ACTIONS}/${clientDocId}`
    : null;
  const {
    data: actionsData,
    error: actionsError,
    isLoading: isLoadingActions,
  } = useSWR(actionsKey, fetcher);

  const idList = useMemo(() => {
    if (!actionsData) return [];
    switch (activeTab) {
      case "my-mates":
        return actionsData.request_Accepted || [];
      case "sent":
        return actionsData.request_Sent || [];
      case "received":
        return actionsData.request_Received || [];
      case "favorite":
        return actionsData.bookmarked || [];
      default:
        return [];
    }
  }, [actionsData, activeTab]);

  const {
    data: profilePages,
    error: profilesError,
    isLoading: isLoadingProfiles,
    size,
    setSize,
    mutate,
  } = useSWRInfinite(
    (pageIndex) => {
      if (!actionsData) return null;
      const start = pageIndex * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      const idsToFetch = idList.slice(start, end);
      if (idsToFetch.length === 0) return null;
      return idsToFetch.map(
        (id) => `${API_ENDPOINTS.GET_CLIENT_DATA}?docId=${id}`
      );
    },
    multiFetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  useEffect(() => {
    setSize(1);
  }, [activeTab, setSize]);

  const profiles = profilePages ? profilePages.flat() : [];
  const isLoading = isLoadingActions || (isLoadingProfiles && !profilePages);
  const isEmpty = !isLoadingActions && idList.length === 0;
  const isReachingEnd =
    isEmpty ||
    (profilePages && profilePages[profilePages.length - 1]?.length < PAGE_SIZE);

  return {
    profiles,
    isLoading,
    isError: actionsError || profilesError,
    isLoadingMore: isLoading,
    isEmpty,
    isReachingEnd,
    setSize,
    mutate,
  };
};
