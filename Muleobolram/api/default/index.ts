import axios from 'axios';

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'http://localhost:3000',
  });

  return request;
};

export const getRequestWithAccessToken = (token: string) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'http://localhost:3000',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return request;
};
