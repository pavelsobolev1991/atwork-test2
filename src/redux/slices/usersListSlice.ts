import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadUsersList } from '../actions/loadUsersList';
import { editUsersList } from '../actions/editUsersList';

const initialState: TestAppAPI.TestAppState = {
  users: [],
};

const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    archiveCard(state, action: PayloadAction<number>) {
      state.users = [...state.users].map((user) => {
        if (user.id === action.payload) {
          return { ...user, isArchived: true };
        }
        return user;
      });
    },
    activateCard(state, action: PayloadAction<number>) {
      state.users = [...state.users].map((user) => {
        if (user.id === action.payload) {
          delete user.isArchived;
          return user;
        }
        return user;
      });
    },
    hideCard(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUsersList.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(editUsersList.fulfilled, (state, action) => {
      const editedUserIndex = state.users.findIndex(
        (user: { id: number }) => user.id === action.payload.id
      );
      if (editedUserIndex !== -1) {
        state.users[editedUserIndex] = action.payload;
      }
    });
  },
});

export const { archiveCard, activateCard, hideCard } = usersListSlice.actions;

export default usersListSlice.reducer;
