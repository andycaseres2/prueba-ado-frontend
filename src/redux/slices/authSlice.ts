import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/User.types";

interface AuthState {
  user: User | null;
  isActiveUser: boolean;
}

const initialState: AuthState = {
  user: null,
  isActiveUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isActiveUser = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      state.isActiveUser = false;
      localStorage.removeItem("user");
    },
    loadUserFromLocalStorage(state) {
      const userJSON = localStorage.getItem("user");
      if (userJSON) {
        try {
          state.user = JSON.parse(userJSON);
          state.isActiveUser = state.user !== null && true;
        } catch (error) {
          console.error("Error al analizar JSON del localStorage:", error);
          localStorage.removeItem("user");
        }
      }
    },
  },
});

export const { login, logout, loadUserFromLocalStorage } = authSlice.actions;
export default authSlice.reducer;
