import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
     products : [],
     isLoading: false,
     error: null
};

const BASE_URl='http://localhost:5000/products'

export const fetchProducts = createAsyncThunk('products/fetchProducts',  async() => {
    const res =await axios.get(BASE_URl);
    // console.log(res.data);
    return res.data;
}
) 

export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) =>{
        state.isLoading = true;
        state.error = null;
    })
    .addCase(fetchProducts.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) =>{
        state.isLoading = false;
        state.error = action.error.message;
    })
  }
})



export default productSlice.reducer