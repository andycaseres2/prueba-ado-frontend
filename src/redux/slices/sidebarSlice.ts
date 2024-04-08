// slices/sidebarSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isExpandedMenu: boolean;
}

const initialState: SidebarState = {
  isExpandedMenu: localStorage.getItem("isExpandedMenu") === "true" || true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isExpandedMenu = !state.isExpandedMenu;
      localStorage.setItem("isExpandedMenu", state.isExpandedMenu.toString());
    },
  },
});

export const { toggleMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
