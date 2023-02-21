import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { imageData } from "../components/DalleData";

export interface CartItem {
  id: number;
  title: string;
  src: string;
  price: number;
  amount: number;
}

export interface LayoutProps {
  children: React.ReactNode;
}

type SliceState = {
  open: boolean;
  cart: Array<CartItem>;
  imageData: Array<CartItem>;
};

const initialState: SliceState = {
  open: false,
  cart: [],
  imageData: imageData,
};
//typescript needs the above not to be blank

export const artSlice = createSlice({
  name: "art",
  initialState,
  reducers: {
    //PayloadAction<string> action typing for Typescript
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    addCart: (state, action: PayloadAction<CartItem>) => {
      //if already exists in cart, add to amount
      const found = state.cart.find((elem) => elem.id === action.payload.id);
      if (found != undefined) {
        found.amount++;
      } else {
        state.cart.push(action.payload);
      }
    },
    clearCart: (state) => {
      //revert to empty
      state.cart = [];
    },
    removeCart: (state, action: PayloadAction<CartItem>) => {
      //filter out items from cart
      state.cart = state.cart.filter((elem) => elem.id != action.payload.id);
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      //if exists in cart, remove from amount
      const found = state.cart.find((elem) => elem.id === action.payload.id);
      if (found != undefined) {
        if (found.amount > 1) {
          found.amount--;
        } else {
          state.cart = state.cart.filter(
            (elem) => elem.id != action.payload.id
          );
        }
      }
    },
  },
});
export const { setOpen, addCart, removeCart, removeItem, clearCart } =
  artSlice.actions;

export default artSlice.reducer;
