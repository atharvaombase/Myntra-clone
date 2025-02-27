import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    MarkFetchDone: (state) => {
      state.fetchDone = true;
      state.currentlyFetching = false;
    },
    MarkFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    MarkFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const itemsFetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
