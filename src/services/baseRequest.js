import axios from "axios";

const getHeaders = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
};

export const request = (method, endpoint, body) => {
  return axios[method](`${import.meta.env.VITE_API_URL}${endpoint}`, body);
};

const requestWithHeaders = axios.create(getHeaders());

export const authRequest = (method, endpoint, body) => {
  return requestWithHeaders[method](
    `${import.meta.env.VITE_API_URL}${endpoint}`,
    body ?? {}
  );
};
