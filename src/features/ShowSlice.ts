import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../hooks/store";

interface ShowState {
  [value: string]: boolean,
}

const initialState: ShowState = {
  value: false,
}

export const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    toggle: (state:any, action: PayloadAction<boolean>) => {
      // const index = action.payload;
      state.value = !state.value
      // state.value.map((item: any) => item.id === action.payload ? { ...item, status: (item.status ? false : true) } : item);
    },
    toggleByAmount: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
});

export const toggleSwitch = showSlice.actions.toggle;

export const { toggle, toggleByAmount } = showSlice.actions

export const selectCount = (state: RootState) => state.show.value

export default showSlice.reducer;
