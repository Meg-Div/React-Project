import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { imageData } from "../components/data/DalleData";
import { pickData } from "../components/data/PicksData";

interface CartItem {
  id: number,
  title: string,
  src: string,
  price: string,
}

type SliceState = {
  artSearch: string;
  open: boolean;
  cart: Array<CartItem>;
  imageData: Array<CartItem>;
  pickData: Array<CartItem>;
}

const initialState: SliceState = {artSearch: "", open: false, cart: [], imageData: imageData, pickData: pickData};
//typescript needs the above not to be blank

export const artSlice = createSlice({
  name: "art",
  initialState,
  reducers: {
    //PayloadAction<string> action typing for Typescript
    setArt: (state, action: PayloadAction<string>) => {
      state.artSearch = action.payload
    },
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload
    },
    addCart: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload)
    },
    removeCart: (state, action: PayloadAction<CartItem>) => {
      state.cart = state.cart.filter((elem) => elem.id != action.payload.id)
    },
  },
});
export const { setArt, setOpen, addCart, removeCart} = artSlice.actions;

export default artSlice.reducer;