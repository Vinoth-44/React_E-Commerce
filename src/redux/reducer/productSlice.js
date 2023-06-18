import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  isLoading: false,
  error: null,
}

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const res = await fetch('https://fakestoreapi.com/products/').then((data) => data.json());
    return res;
  }
)

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false
      state.products = action.payload
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})

export default contentSlice.reducer