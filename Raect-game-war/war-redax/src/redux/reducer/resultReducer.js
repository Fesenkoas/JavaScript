import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compWin: 0,
  playerWin: 0,
  result: "",
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    resetResultat(state, action) {
      state.playerWin = 0;
      state.compWin = 0;
      state.result = "";
    },
    getResult(state, action) {
      const { cardUser, cardCPU, name } = action.payload;

      for (let i = 0; i < cardUser.length - 1; i++) {
        if (cardUser[i] > cardCPU[i]) {
          state.playerWin += 1;
        }
        if (cardUser[i] < cardCPU[i]) {
          state.compWin += 1;
        }
      }
      if (state.playerWin > state.compWin) {
        state.result = name;
      }
      if (state.playerWin < state.compWin) {
        state.result = "COMP";
      } 
      else {
        state.result = "DRAW";
      }
    },
  },
});

export const { changeScore, getResult, resetResultat } = resultSlice.actions;
export default resultSlice.reducer;
