import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '0', name: 'kenvin gg' },
  { id: '0', name: ' Masion ki' },
]

const usersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer