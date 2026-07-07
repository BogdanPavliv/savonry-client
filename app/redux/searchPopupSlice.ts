import { createSlice } from "@reduxjs/toolkit";
import { SearchPopupState } from "@/types/others";

const initialState: SearchPopupState = {
  openSearchPopup: false,
};

const searchPopupSlice = createSlice({
  name: "searchPopup",
  initialState,
  reducers: {
    SearchPopupOpen: (state) => {
      state.openSearchPopup = true;
    },
    SearchPopupClose: (state) => {
      state.openSearchPopup = false;
    },
  },
});

export const { SearchPopupOpen, SearchPopupClose } = searchPopupSlice.actions;

export default searchPopupSlice.reducer;
