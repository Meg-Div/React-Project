import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { imageData } from "../components/data/DalleData";

interface CartItem {
  id: number;
  title: string;
  src: string;
  price: number;
  amount: number;
}

type SliceState = {
  artSearch: string;
  open: boolean;
  cart: Array<CartItem>;
  imageData: Array<CartItem>;
};

const initialState: SliceState = {
  artSearch: "",
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
    setArt: (state, action: PayloadAction<string>) => {
      state.artSearch = action.payload;
    },
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
    removeCart: (state, action: PayloadAction<CartItem>) => {
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
export const { setArt, setOpen, addCart, removeCart, removeItem } =
  artSlice.actions;

export default artSlice.reducer;
