import useSWR from "swr";
import { API_ENDPOINTS } from "../../services/apiEndPoints/ApiEndpoints";
import { fetcher } from "../../lib/fetcher";

export const useCheckNotificationStatus = (senderId, receiverId) => {
  const key =
    senderId && receiverId
      ? `${API_ENDPOINTS.CHECK_NOTIFICATION_STATUS}?sender_docId=${senderId}&receiver_docId=${receiverId}`
      : null;

  const { data, error, isLoading, mutate } = useSWR(key, fetcher, {
    revalidateOnFocus: true,
  });

  return {
    statusData: data,
    isLoadingStatus: isLoading,
    isErrorStatus: error,
    mutateStatus: mutate,
  };
};
