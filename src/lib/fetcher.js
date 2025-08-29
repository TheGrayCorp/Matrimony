import apiClient from '../services/api/apiClient';

export const fetcher = (url) => apiClient.get(url).then(res => res.data);