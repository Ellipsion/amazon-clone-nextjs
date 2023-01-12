import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Actions...
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },  // action.payload     
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.product.id === action.payload);
      const newBasket = state.items
      // index ? state.items = newBasket.filter(item => item !== state.items[index]) : console.warn('cannot remove item from basket as the item does not exit.')
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn('cannot remove item from basket as the item does not exit.')
      }

      state.items = newBasket;
      
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const totalPrice = (state) => state.basket.items.reduce((total,item) => total + item.product.price , 0)

export default basketSlice.reducer;
