import { createSlice } from '@reduxjs/toolkit'
import { fetchTemplates, fetchTemplateById, updateTemplate, createTemplate } from './TemplateThunk'

const templateSlice = createSlice({
  name: 'template',
  initialState: {
    list: [],
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
      // .addCase(fetchTemplates.pending, (state) => {
      //   state.loading = true
      // })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(fetchTemplateById.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.list.push(action.payload)
        state.loading = false
      })
      .addCase(updateTemplate.fulfilled, (state) => {
          state.loading = false
      })
      .addCase(createTemplate.fulfilled, (state, action) => {
        state.list.push(action.payload)
        state.loading = false
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true
        }
      )
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