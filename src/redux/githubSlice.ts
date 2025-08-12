import { createSlice } from '@reduxjs/toolkit';
import { fetchUserDetails, fetchUsers } from './githubAction';


const githubSlice = createSlice({
  name: 'github',
  initialState: {
    users: [] as any[],
    selectedUser: null as any,
    loading: false,
    modalVisible: false,
  },
  reducers: {
    closeModal: (state) => {
      state.modalVisible = false;
      state.selectedUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
        state.modalVisible = true;
      });
  },
});

export const { closeModal } = githubSlice.actions;
export default githubSlice.reducer;
