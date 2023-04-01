import axios, {AxiosInstance} from 'axios';

const URL = 'https://12.react.pages.academy/six-cities';

const REQUEST_TIMEOUT = 5000;

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
  });
  return api;
};

export { createApi };
