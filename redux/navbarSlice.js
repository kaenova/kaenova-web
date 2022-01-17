import { createSlice } from "@reduxjs/toolkit";

const navBarSlice = createSlice({
  name: "navbar",
  initialState: {
    status: "Head",
  },
  reducers: {
    onHead: (state, action) => {
      state.status = "Home";
    },
    onWhatIDo: (state, action) => {
      state.status = "Projects";
    },
    onContact: (state, action) => {
      state.status = "Contact Me!";
    },
  },
});

// Export Setter
export const { onContact, onHead, onWhatIDo } = navBarSlice.actions;

// Buat store yang nge bind "nama" slice ke slice fungsinya ini dilakukan di store.js

// Export Selector, dimana mengarahkan ke "nama" slice dan nama statenya
export const selectNavBar = (state) => state.navbar.status;

// Export Reducer
export default navBarSlice.reducer;
