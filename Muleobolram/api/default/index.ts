import axios from 'axios';

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'http://13.124.231.212:5000',
  });

  return request;
};

export const getRequestWithAccessToken = (token: string) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'http://13.124.231.212:5000',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return request;
};
