import { createSlice } from '@reduxjs/toolkit'
import { fetchTemplates, fetchTemplateById, updateTemplate, createTemplate } from './TemplateThunk'

const templateSlice = createSlice({
  name: 'template',
  initialState: {
    list: [],
    current: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearCurrentTemplate: (state) => {
      state.current = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(fetchTemplateById.fulfilled, (state, action) => {
        state.current = action.payload
      })
      .addCase(updateTemplate.fulfilled, (state, action) => {
        state.current = action.payload
      })
      .addCase(createTemplate.fulfilled, (state, action) => {
        state.list.push(action.payload)
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.error.message
          state.loading = false
        }
      )
  },
})

export const { clearCurrentTemplate } = templateSlice.actions;
const templateReducer = templateSlice.reducer
export default templateReducer