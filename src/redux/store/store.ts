import { configureStore } from '@reduxjs/toolkit';
import UsersListSlice from '../slices/usersListSlice'

export default configureStore({
  reducer: {
    usersList: UsersListSlice
  }
})
