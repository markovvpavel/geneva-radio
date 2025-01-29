import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LayoutState {
  isMenu: boolean;
  pageScroll: number;
}

const initialState: LayoutState = {
  isMenu: false,
  pageScroll: 0,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setIsMenu: (state, action: PayloadAction<boolean>) => {
      state.isMenu = action.payload;
    },

    setPageScroll: (state, action: PayloadAction<number>) => {
      state.pageScroll = action.payload;
    },
  },
});

export const { setIsMenu, setPageScroll } = layoutSlice.actions;
export default layoutSlice.reducer;
