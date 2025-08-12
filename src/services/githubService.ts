import axios from 'axios';

const API_BASE = 'https://api.github.com';
const TOKEN = 'Paste you github token here'; 


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
