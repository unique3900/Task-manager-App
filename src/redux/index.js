import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    tasks: ['Hello','Bro']
  },
  reducers: {
    saveDataToRedux: (state,action) => {
     
      state.tasks = [...state.tasks,action.payload]
    },
      removeDataFromRedux(state, action) {
          state.tasks.splice(action.payload, 1);
   }
  },
})

// Action creators are generated for each case reducer function
export const {saveDataToRedux,removeDataFromRedux  } = counterSlice.actions

export default counterSlice.reducer