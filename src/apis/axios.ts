import axios, { AxiosInstance } from 'axios';

const nightOpeningURL =
  'https://port-0-night-opening-be-lzpgwvan4a125130.sel4.cloudtype.app/';
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${nightOpeningURL}`,
  timeout: 1000,
});
