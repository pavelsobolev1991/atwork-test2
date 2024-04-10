import { createAsyncThunk } from '@reduxjs/toolkit';

export const editUsersList = createAsyncThunk<TestAppAPI.User, TestAppAPI.User>(
  'users/edit',
  async (updatedUserData, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${Number(updatedUserData.id)}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUserData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();
      return data;
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
);
