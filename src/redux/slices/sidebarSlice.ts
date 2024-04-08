// slices/sidebarSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isExpandedMenu: boolean;
}

const initialState: SidebarState = {
  isExpandedMenu: localStorage.getItem("isExpandedMenu") === "true", // Inicializa desde el almacenamiento local
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isExpandedMenu = !state.isExpandedMenu;
      localStorage.setItem("isExpandedMenu", state.isExpandedMenu.toString()); // Guarda en el almacenamiento local
    },
  },
});

export const { toggleMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
