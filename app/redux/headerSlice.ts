import { createSlice } from "@reduxjs/toolkit";
import { HeaderState } from "@/types/others";

const initialState: HeaderState = {
    isMenuToggled: false,
}

const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        toggleMenu: (state) => {
          state.isMenuToggled = !state.isMenuToggled;
        },
        closeMenu: (state) => {
          state.isMenuToggled = false;
        },
    },
});

export const { toggleMenu, closeMenu } = headerSlice.actions;

export default headerSlice.reducer;