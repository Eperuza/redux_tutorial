import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  //random initial data
  { id: '0', name: 'Ash' },
  { id: '1', name: 'Misty' },
  { id: '2', name: 'Brock'}
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{
    //populate the reducers
  }
})

export default usersSlice.reducer