import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {artSearch: "", open: false};
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
  },
});
export const { setArt, setOpen } = artSlice.actions;

export default artSlice.reducer;