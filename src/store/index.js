import { configureStore } from "@reduxjs/toolkit";
import fetchStatusSlice from "./fetchStatusSlice";
import itemsSlice from "./itemsSlice";
import bagSlice from "./bagItemsSlice";


const myntraStore = configureStore({
  reducer:
  {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bagitems: bagSlice.reducer
  }
});

export default myntraStore;