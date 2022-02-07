import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  project: null,
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    updateProject: (state, action) => {
      state.project = action.payload
    },
  },
})

export const { updateProject } = projectSlice.actions

export default projectSlice.reducer