import apiClient from "../api/apiClient";
import { API_ENDPOINTS } from "../apiEndPoints/ApiEndpoints";

export const updateClientAction = ({ senderId, receiverId, status }) => {
  return apiClient.put(API_ENDPOINTS.CLIENT_ACTIONS, null, {
    params: {
      sender_docId: senderId,
      receiver_docId: receiverId,
      notification_status: status,
    },
  });
};

export const checkNotificationStatus = ({ senderId, receiverId }) => {
  return apiClient.get(API_ENDPOINTS.CHECK_NOTIFICATION_STATUS, {
    params: {
      sender_docId: senderId,
      receiver_docId: receiverId,
    },
  });
};
