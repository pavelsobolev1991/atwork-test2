import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadUsersList = createAsyncThunk<TestAppAPI.User[]>(
  'usersList/load',
  async (_, { rejectWithValue }) => {
    console.log('loadUsersList')
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=6');

    if (!response.ok) {
      return rejectWithValue('Server error');
    }

    const data: TestAppAPI.User[] = await response.json();
    return data;
  }
);
