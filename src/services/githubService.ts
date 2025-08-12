import axios from 'axios';

const API_BASE = 'https://api.github.com';
const TOKEN = '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'; 


const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `token ${TOKEN}`,
  },
});

export const searchUsers = async (query: string) => {
  if (!query) return { items: [] };
  const res = await axiosInstance.get(`/search/users?q=${query}`);
  return res.data;
};

export const getUserDetails = async (username: string) => {
  const res = await axiosInstance.get(`/users/${username}`);
  return res.data;
};
