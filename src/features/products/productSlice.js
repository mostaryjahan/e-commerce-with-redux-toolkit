import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     product : [],
     isLoading: false,
     error: null
}

export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    
  },
})



export default productSlice.reducer