import apiClient from "../api/apiClient";

export const saveUserData = (userData) => {
  return apiClient.put("/saveClientData", userData);
};
