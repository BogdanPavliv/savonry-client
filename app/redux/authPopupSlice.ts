import { createSlice } from "@reduxjs/toolkit";
import { AuthPopupState } from "@/types/others";

const initialState: AuthPopupState = {
  openAuthPopup: false,
};

const authPopupSlice = createSlice({
  name: "authPopup",
  initialState,
  reducers: {
    AuthPopupOpen: (state) => {
      state.openAuthPopup = true;
    },
    AuthPopupClose: (state) => {
      state.openAuthPopup = false;
    },
  },
});

export const { AuthPopupOpen, AuthPopupClose } = authPopupSlice.actions;

export default authPopupSlice.reducer;
