import apiClient from "../api/apiClient";
import { API_ENDPOINTS } from "../apiEndPoints/ApiEndpoints";

export const saveUserData = (userData) => {
  return apiClient.put(API_ENDPOINTS.SAVE_CLIENT_DATA, userData);
};

export const updateUserData = (userData) => {
  return apiClient.put(API_ENDPOINTS.UPDATE_CLIENT, userData);
};
