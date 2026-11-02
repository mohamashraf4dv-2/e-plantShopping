import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const existedInCart = state.items.find(i=> i.name === action.payload.name)
        if(action.payload && !existedInCart)
            state.items.push({...action.payload,quantity:1})
        else
            existedInCart.quantity++;
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(i=> i.name !== action.payload.name)
    },
    updateQuantity: (state, action) => {

        const existingItem = state.items.find(i=> i.name === action.payload.name)
        if(existingItem)
            existingItem.quantity= action.payload.quantity
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
