import { API_ENDPOINTS } from "../../services/apiEndPoints/ApiEndpoints";

export const MY_MATES_TABS = [
  {
    id: "my-mates",
    label: "My Mates",
    apiPath: API_ENDPOINTS.GET_MY_MATES,
  },
  {
    id: "sent",
    label: "Sent",
    apiPath: API_ENDPOINTS.GET_SENT_REQUESTS,
  },
  {
    id: "received",
    label: "Received",
    apiPath: API_ENDPOINTS.GET_RECEIVED_REQUESTS,
  },
  {
    id: "favorite",
    label: "Favorite",
    apiPath: API_ENDPOINTS.GET_FAVORITES,
  },
];
