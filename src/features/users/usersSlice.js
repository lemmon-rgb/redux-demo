import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', name: 'Tianna Jenkins' },
  { id: '2', name: 'kenvin gg' },
  { id: '3', name: ' Masion ki' },
]

const usersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer