import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: 'Initial State', content: 'Random initial state content, could be empty array' },
  ];
  
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action){
      state.push(action.payload)
    }
  }
});

export const {postAdded} = postsSlice.actions
export default postsSlice.reducer