import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bagitems",
  initialState: [],
  reducers:
  {
    addInitialBagItems: (state, action) => {
      return [...state, action.payload];
    },
    removeBagItem: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
})


export const bagAction = bagSlice.actions;
export default bagSlice;