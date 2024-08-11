import axios, { AxiosInstance } from 'axios';

const nightOpeningURL = 'test';
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${nightOpeningURL}`,
});
