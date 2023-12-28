import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        clearCart: (state)=>{
            state.items = [];
        },
        removeItem: (state, action)=>{
            // state.items = state.items.filter( (item) => item.id !== action.payload);

             // Find the index of the first item with the specified id
      const indexToRemove = state.items.findIndex(item => item.id === action.payload);
      
      // Remove the item at the found index
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
      }

        },
    },
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
