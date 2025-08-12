import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchUsers, getUserDetails } from '../services/githubService';


export const fetchUsers = createAsyncThunk(
  'github/fetchUsers',
  async (query: string) => {
    if (!query) return [];
    const data = await searchUsers(query);
    return data.items;
  }
);

export const fetchUserDetails = createAsyncThunk(
  'github/fetchUserDetails',
  async (username: string) => {
    const data = await getUserDetails(username);
    return data;
  }
);