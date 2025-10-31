import apiClient from "../api/apiClient";
import { API_ENDPOINTS } from "../apiEndPoints/ApiEndpoints";

export const saveUserData = (userData) => {
  return apiClient.put(API_ENDPOINTS.SAVE_CLIENT_DATA, userData);
};

export const updateUserData = (userData) => {
  return apiClient.put(API_ENDPOINTS.UPDATE_CLIENT, userData);
};

export const generateChartData = (clientDocId, payload) => {
  const url = `${API_ENDPOINTS.GENERATE_CHARTS}?clientDocId=${clientDocId}`;
  return apiClient.post(url, payload);
};